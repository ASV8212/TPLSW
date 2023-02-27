
function GridControlDetailRCU (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
		 		var HTML =	'<span><input type="radio" class="custom-control-input CBSIDBfields" onclick="getNegatie(this)"  value="Yes" id="STATUSY'+rowno+'" name="RCUS_NAGATIVSTATUS'+rowno+'"><label class="custom-control-label" for="STATUSY'+rowno+'">Yes</label>';			 
		 		HTML = HTML + '<input type="radio" class="custom-control-input CBSIDBfields" onclick="getNegatie(this)"  value="No" id="STATUSN'+rowno+'" name="RCUS_NAGATIVSTATUS'+rowno+'"><label class="custom-control-label" for="STATUSN'+rowno+'">No</label></span>';			  
		 		
		 		var htmldata = $(HTML);
					
					$(htmldata).find('[name=RCUS_NAGATIVSTATUS'+rowno+'][value="'+data+'"]').attr('checked', 'checked');

					//alert($(htmldata).find('[name=OKYD_DOCSTATUS'+rowno+'][value="'+data+'"]').length)
					//alert(htmldata[0].outerHTML);
					
	        	return htmldata[0].outerHTML;      		
			
         } 
		 },
		 { targets: 2, "render": function ( data, type, row, meta ) {                            
	 			
				 if(row[1] == "Yes")
				{
				 
			
				var rowno = meta.row;	 
				var HTML =	'<span><input type="text"  id="RCUS_REMARKS'+rowno+'"  name="RCUS_REMARKS'+rowno+'" maxlength="25" class="form-control NoSpecialChar RMK form-control ">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

				if ($(htmldata).find('[name=RCUS_REMARKS'+rowno+']').hasClass("IsCURCommaFields"))
					{
					data = CURCommaSep(data);
					}
					
				
					$(htmldata).find('[name=RCUS_REMARKS'+rowno+']').attr("value",data);

					
					return htmldata[0].outerHTML;      		
				}
			 else
				 {
					var rowno = meta.row;	 
					var HTML =	'<span><input type="text"  disabled id="RCUS_REMARKS'+rowno+'"  name="RCUS_REMARKS'+rowno+'" maxlength="25" class="form-control NoSpecialChar RMK form-control ">';			 
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
				 }
     	   ],

          "fnDrawCallback": function (oSettings) {

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
  //   var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
  //   var Filename  = names.replace(',','')
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
    alert('File name contains special character please remove and upload');
	$(id).closest('td').find('input[type="file"]').val('')
	return;
}
	*/ 
	 
	 

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
				$('.DDV').show();
				$('.rounded').show();
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

function RCUPage()
{
if($("#RCUI_DATEOFINIT").val()=="")	
{
var today=$("#DMY7").val().split("|")[1] 	
$("#RCUI_DATEOFINIT").val(today)
$(RCUI_DATEOFINIT).next().addClass('active')
}
	
if($("#RCUI_INITIDATED").val()=='Yes')
{
  $(".INITIATEPAGE").show();
  $(".INITIATE").hide();
  $("#RCUI_VENDORNAME").attr('disabled',true)
  $("#RCUI_BRANCHNAME").attr('disabled',true)
}
else
{
  $(".INITIATEPAGE").hide();
  $(".INITIATE").show();
  $("#RCUI_VENDORNAME").attr('disabled',false)
  $("#RCUI_BRANCHNAME").attr('disabled',false)
}


if($("#RCUI_DATEOFCOMP").val() != "")
{
	$('.RCUSUB').text('Re-submit')
}	


RCUVENDORONLOAD()
}


// TV1 Script Start

function CheckFileStatus()
{
 if($("#TEVD_FILESTATUS").val()=="Initiate")
	 {
	$(".TEVDDBfields").attr("disabled",true)
	 $(".Inti").hide();
	 $(".PRO").show();
      $("#TEVD_STATUS").attr("disabled",false)
	 }
 else
	 {
	 $(".TEVDDBfields").attr("disabled",false)
	 $(".PRO").hide();
	  $(".Inti").show();
	 }
}

function StatusData (Status,RowHTML,StatusFld,FIOAddr)
{
	var prfx = StatusFld.split("_")[0]
	
	if (Status == "To be Initiated")
	{
		
	$(RowHTML).find(".ValuationInit").show();
	
	$(RowHTML).find(".ReAssignPopup").hide();
	$(RowHTML).find(".ViewDataRpt").hide();
	$(RowHTML).find(".ViewRpt").hide();
	$(RowHTML).find(".SaveRpt").hide();
	$(RowHTML).find(".RADCOMPL").hide();
	$(RowHTML).find(".PORDOC").hide();
	
	$(RowHTML).find("[name=" + FIOAddr + "]").attr('disabled',true)
	$(RowHTML).find('input[type=radio]').attr('disabled',false)
	
	getInitdate(RowHTML)
	}
else if (Status == "In Progress")
	{
	$(RowHTML).find(".ValuationInit").hide();
	$(RowHTML).find(".ReAssignPopup").show();
	$(RowHTML).find(".ViewDataRpt").hide();
	$(RowHTML).find(".ViewRpt").show();
	$(RowHTML).find(".SaveRpt").hide();
	$(RowHTML).find(".RADCOMPL").hide();
	$(RowHTML).find(".PORDOC").hide();
	$(RowHTML).find("."+prfx+"DBfields").attr('disabled',true)
	$(RowHTML).find('input[type=radio]').attr('disabled',false)
	$(RowHTML).find('.select-dropdown').attr('disabled',true)
	$(RowHTML).find('.APPLIC').attr('disabled',true)
	}
else if (Status == "Completed")
{
$(RowHTML).find(".ValuationInit").hide();
$(RowHTML).find(".ReAssignPopup").hide();
$(RowHTML).find(".ViewDataRpt").show();
$(RowHTML).find(".ViewRpt").hide();
$(RowHTML).find(".SaveRpt").show();
$(RowHTML).find(".RADCOMPL").show();
$(RowHTML).find(".PORDOC").hide();
$(RowHTML).find("."+prfx+"DBfields").attr('disabled',true)
$(RowHTML).find('input[type=radio]').attr('disabled',false)
$(RowHTML).find('.select-dropdown').attr('disabled',true)
$(RowHTML).find('.APPLIC').attr('disabled',true)
}	
else if (Status == "Verified")
{
$(RowHTML).find(".ValuationInit").hide();
$(RowHTML).find(".ReAssignPopup").hide();
$(RowHTML).find(".ViewDataRpt").show();
$(RowHTML).find(".ViewRpt").hide();
$(RowHTML).find(".SaveRpt").show();
$(RowHTML).find(".RADCOMPL").show();
$(RowHTML).find(".PORDOC").hide();
$(RowHTML).find("."+prfx+"DBfields").attr('disabled',true)
$(RowHTML).find('input[type=radio]').attr('disabled',false)
$(RowHTML).find('.select-dropdown').attr('disabled',true)
$(RowHTML).find('.APPLIC').attr('disabled',true)
//$(RowHTML).find(".CORRDISB").attr("disabled",true)
 

}	
}

function Vendername()
{

 BrID=$("#RSBranch").val()
 Group=$("#Group").val()
 var xml=UI_getdata(BrID,Group,"","","","LSW_SGETVALUATION")
 $("#RSVender").empty();
 $("#RSVender").append($(xml).find("RESULT").html());
 $("#RSVender").material_select(); 
}

function ResAssVendername()
{

 BrID=$("#REASSVENDOR").val()
 Group=$("#Group").val()
 var xml=UI_getdata(Group,BrID,$("#PrcsID").val(),$("#UNIQUID").val(),"","LSW_SGETVALUATION")
 $("#RSVender").empty();
 $("#RSVender").append($(xml).find("RESULT").html());
 $("#RSVender").material_select(); 
}

function getInitdate(RowHTML) {

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

//var  today = dd + '/' + mm + '/' + yyyy
var  today = $("#DMY7").val().split("|")[1]
 
    $(RowHTML).find(".CURDATE").val(today)
	 $(RowHTML).find(".CURDATE").next().addClass('active')
}




function GetBranchName(BranchID,BranchName)
{	
	var row=$($('.FIOfficeVerify').find(event.target).closest('.DYNROW')[0]).attr('data-row');
	var BranchID=$(BranchID).val();
	var xml=UI_getdata("FI",BranchID,$("#PrcsID").val(),"","","LSW_SGETVALUATION")
	$("#"+BranchName+row).html("")
	$("#"+BranchName+row).append($(xml).find("RESULT").html());
	$("#"+BranchName+row).material_select();	
}


function MCAVERIFI()
{
	 var row = $(".MCAVerify").find(".DYNROW").length;
	 
	 for (i=0;i<row;i++)
	 {
		 
	var HTML =	 $(".MCAVerify").find(".DYNROW")[i];
	
	var Status = $(HTML).find("[name=MCAV_APPLINAME]").val();	 
	
	if(Status!="")
		{
		
		$(HTML).find("[name=MCAV_APPLINAME]").addClass('DSVLBL');
		
		}
		
	var HYPERLINK = $(HTML).find("[name=MCAV_HYPERLINK]").val();	 	
		
		if(HYPERLINK=="FULFILLED")
		{
			$(HTML).find(".MCAV_MCARPTREQ").show(); 
		}
		
		
		var RptGEN =$(HTML).find("input[name='MCAV_RPTGEBERATION']:checked").val()	
		if(RptGEN=="Auto")
		{
			$(HTML).find(".rptupload").hide(); 
			$(HTML).find(".INTDSBV").show(); 
			
		}
		else
		{
          $(HTML).find(".rptupload").show(); 
          $(HTML).find(".INTDSBV").hide(); 
        }
			
		
	 }

}


function MCAMANUALCHANGE()
{
	var row = $(".MCAVerify").find(".DYNROW").length;
	 
	 for (i=0;i<row;i++)
	 {
		 
	 var HTML =	 $(".MCAVerify").find(".DYNROW")[i];
     var RptGEN =$(HTML).find("input[name='MCAV_RPTGEBERATION']:checked").val()	
		if(RptGEN=="Auto")
		{
			$(HTML).find(".rptupload").hide(); 
			$(HTML).find(".INTDSBV").show(); 
			
		}
		else
		{
         $(HTML).find(".rptupload").show(); 
         $(HTML).find(".INTDSBV").hide(); 
       }
			
		
	 }	

}

function Currentdate()
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

//var  today = dd + '/' + mm + '/' + yyyy	

var  today =$("#DMY7").val().split("|")[1]	

return today
}

function DeleteUPLOAD(id)
{
var strconfirm = confirm("Are you sure you want Delete file");
if (strconfirm == true) 
{	
	  $("#RCUI_UPLDDOC").val('');
	  $(".DDU").show()
	  $(".DDV").hide()
	 $(".DDU").find('.name').text('Click here Upload')
	  $("input[name=datafile]").attr('disabled',false);
	  $("input[name=datafile]").attr('display','block');
	 // $(".DDU").show()
    }
  else
	{
		return;
	}
}




function CHKRCUREPTDT(XID)
{
	var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETAPPLICATDATE")
    var InitiDate=$(xml).find('APPLICANTIONDATE').text()	

if(InitiDate!="")
{
if(XID.value!='')	
{	

var InspDate=$("#RCUI_RPTDATE").val()
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
    	 window.alert('Report Date Should not be less than Application Date');
    	 $("#RCUI_RPTDATE").val('')
    	 $("#RCUI_RPTDATE").next().removeClass('active')
    	
    	}
}
}
}
//(".FormSave").hide()


function ReAssignBranch()
{
     var Branch=UI_getdata("","","","","","LSW_SGETASSINBRANCH")
	 $("#REASSVENDOR").append($(Branch).find("RESULT").html());
	 $('#REASSVENDOR').material_select(); 	
	
}

function Branchname()
{
     var Branch=UI_getdata("","","","","","LSW_SGETASSINBRANCH")
	 $("#TEVD_BRANCNAME").append($(Branch).find("RESULT").html());	
     $("#TVII_BRANCNAME").append($(Branch).find("RESULT").html());	
     $("#TIII_BRANCNAME").append($(Branch).find("RESULT").html());
     $("#LEGD_BRANCNAME").append($(Branch).find("RESULT").html());
     $("#LDII_BRANCNAME").append($(Branch).find("RESULT").html());
     $("#FIRV_BRNAME").append($(Branch).find("RESULT").html());
     $("#FIOV_BRNAME").append($(Branch).find("RESULT").html());

     $("#RCUI_BRANCHNAME").append($(Branch).find("RESULT").html());

}


function DSBVLTECH()
{
	   $('.TECHDSBL').find(".form-control").attr('disabled',true);
	   $('.TECHDSBL').find(".custom-control-input").attr('disabled',true);
	   $('.TECHDSBL').find(".GridDocUpd").hide();
	   $('.TECHDSBL').find(".Gridmdb-select").attr('disabled',true);
	   $('.TECHDSBL').find(".tbodytrtd").attr('disabled',true);
	   $('.TECHDSBL').find(".BTNVerify").attr('disabled',true)
	   $('.TECHDSBL').find(".AddKYC").hide();
	   $('.TECHDSBL').find(".FormSave").hide();
	   $('.TECHDSBL').find(".DelGridrow").hide();
	   $('.TECHDSBL').find('.select-dropdown').attr('disabled',true)
	   $('.TECHDSBL').find('.BTNDedupe').attr('disabled',true)
	   $('.TECHDSBL').find(".DELBTN").hide();
	    $('.TECHDSBL').find(".DELBTNTXT").hide();
	    $('.TECHDSBL').find(".ADDBTN").hide();
	    $('.TECHDSBL').find(".ReUpld").hide();
	     $('.TECHDSBL').find(".KYCDEL").hide();
	     $('.TECHDSBL').find(".btn-sm").attr('disabled',true)
		  $('.TECHDSBL').find(".fa-plus").hide()
		  $('.TECHDSBL').find("input[name=datafile]").attr('disabled',true);
	      $('.TECHDSBL').find(".BTNHIDE").hide()
		  $('.TECHDSBL').find(".RPTBTN").hide()
		  $('.TECHDSBL').find('.datepicker').attr('disabled',true)
		  $('.TECHDSBL').find('.RPTVIEW').show() 	
          $('.TECHDSBL').find('.ADDBTN').hide() 
          $('.ADDBTN').hide()		  
		   

}


function TechII()
{ 
var DATA=["PropertyValuer2|"];
var MemoData=DATA[0].split("|")[0];
var row = $("." + MemoData).find(".DYNROW").length;
for (j=0;j<row;j++)
{
$("#TVII_VENDORNAME"+[j+1]).empty();
var PrcsID=$("#PrcsID").val();
var val=$("#TVII_BRANCNAME"+[j+1]).val()


var UNIQID=""
	
	var VENDID=$("#TVII_VENDORID"+[j+1]).val()
	if(VENDID=="")
	{
	 var UNIQID=$("#TVII_PROPERTYNO"+[j+1]).val()	
	}
	
	
	
if(val!="")
{
//var xml=UI_getdata(PrcsID,val,"","","","LSW_SGETBANKDTLCUSWS")
var xml=UI_getdata("Valuation",val,$("#PrcsID").val(),UNIQID,"","LSW_SGETVALUATION")
var CusName=$(xml).find('RESULT').html();	
$("#TVII_VENDORNAME"+[j+1]).append(CusName)
$("#TVII_VENDORNAME"+[j+1]).material_select("destroy");	
$("#TVII_VENDORNAME"+[j+1]).material_select();
var Data=$("#TVII_VENDORID"+[j+1]).val()
if(Data!="")
{
$("#TVII_VENDORNAME"+[j+1]+" option:contains("+Data+")").attr("selected","selected")
$("#TVII_VENDORNAME"+[j+1]).material_select("destroy");	
$("#TVII_VENDORNAME"+[j+1]).material_select();
}
}
}
}


function TechI()
{
	
	var DATA=["PropertyValuer1|"];
	var MemoData=DATA[0].split("|")[0];
	var row = $("." + MemoData).find(".DYNROW").length;
	for (j=0;j<row;j++)
	{
	$("#TEVD_VENDORNAME"+[j+1]).empty();
	var PrcsID=$("#PrcsID").val();
	var val=$("#TEVD_BRANCNAME"+[j+1]).val()
	
	var UNIQID=""
	
	var VENDID=$("#TEVD_VENDORID"+[j+1]).val()
	if(VENDID=="")
	{
	 var UNIQID=$("#TEVD_PROPERTYNO"+[j+1]).val()	
	}
	
	if(val!="")
    {
	//var xml=UI_getdata(PrcsID,val,"","","","LSW_SGETBANKDTLCUSWS")
	var xml=UI_getdata("Valuation",val,$("#PrcsID").val(),UNIQID,"","LSW_SGETVALUATION")
	var CusName=$(xml).find('RESULT').html();	
	$("#TEVD_VENDORNAME"+[j+1]).append(CusName)
	$("#TEVD_VENDORNAME"+[j+1]).material_select("destroy");	
	$("#TEVD_VENDORNAME"+[j+1]).material_select();
	var Data=$("#TEVD_VENDORID"+[j+1]).val()
	if(Data!="")
	{
	$("#TEVD_VENDORNAME"+[j+1]+" option:contains("+Data+")").attr("selected","selected")
    $("#TEVD_VENDORNAME"+[j+1]).material_select("destroy");	
	$("#TEVD_VENDORNAME"+[j+1]).material_select();
	}
	}
	}
}

function TechIII()
{ 
var DATA=["PropertyValuer3|"];
var MemoData=DATA[0].split("|")[0];
var row = $("." + MemoData).find(".DYNROW").length;
for (j=0;j<row;j++)
{
$("#TIII_VENDORNAME"+[j+1]).empty();
var PrcsID=$("#PrcsID").val();
var val=$("#TIII_BRANCNAME"+[j+1]).val()

	var UNIQID=""
	
	var VENDID=$("#TIII_VENDORID"+[j+1]).val()
	if(VENDID=="")
	{
	 var UNIQID=$("#TIII_PROPERTYNO"+[j+1]).val()	
	}
	
	
	
if(val!="")
    {
//var xml=UI_getdata(PrcsID,val,"","","","LSW_SGETBANKDTLCUSWS")
var xml=UI_getdata("Valuation",val,$("#PrcsID").val(),UNIQID,"","LSW_SGETVALUATION")
var CusName=$(xml).find('RESULT').html();	
$("#TIII_VENDORNAME"+[j+1]).append(CusName)
$("#TIII_VENDORNAME"+[j+1]).material_select("destroy");	
$("#TIII_VENDORNAME"+[j+1]).material_select();
var Data=$("#TIII_VENDORID"+[j+1]).val()
if(Data!="")
{
$("#TIII_VENDORNAME"+[j+1]+" option:contains("+Data+")").attr("selected","selected")
$("#TIII_VENDORNAME"+[j+1]).material_select("destroy");	
$("#TIII_VENDORNAME"+[j+1]).material_select();
}
}
}
}



function LegalI()
{
	var DATA=["LegalRpt|"];
	var MemoData=DATA[0].split("|")[0];
	var row = $("." + MemoData).find(".DYNROW").length;
	for (j=0;j<row;j++)
	{
	$("#LEGD_VENDORNAME"+[j+1]).empty();
	var PrcsID=$("#PrcsID").val();
	var val=$("#LEGD_BRANCNAME"+[j+1]).val()
	var UNIQID=""
	
	var VENDID=$("#LEGD_VENDORID"+[j+1]).val()
	if(VENDID=="")
	{
	 var UNIQID=$("#LEGD_PROPERTYNO"+[j+1]).val()	
	}
	
	if(val!="")
    {
	//var xml=UI_getdata(PrcsID,val,"","","","LSW_SGETBANKDTLCUSWS")
    var xml=UI_getdata("LEGAL",val,$("#PrcsID").val(),UNIQID,"","LSW_SGETVALUATION")
	var CusName=$(xml).find('RESULT').html();	
	$("#LEGD_VENDORNAME"+[j+1]).append(CusName)
		
$("#LEGD_VENDORNAME"+[j+1]).material_select("destroy");	
$("#LEGD_VENDORNAME"+[j+1]).material_select();
	var Data=$("#LEGD_VENDORID"+[j+1]).val()
	if(Data!="")
	{
	$("#LEGD_VENDORNAME"+[j+1]+" option:contains("+Data+")").attr("selected","selected")
	$("#LEGD_VENDORNAME"+[j+1]).material_select("destroy");	
	$("#LEGD_VENDORNAME"+[j+1]).material_select();
	}
	}
	}

}


function LegalII()
{
	var DATA=["LegalIIRpt|"];
	var MemoData=DATA[0].split("|")[0];
	var row = $("." + MemoData).find(".DYNROW").length;
	for (j=0;j<row;j++)
	{
	$("#LDII_VENDORNAME"+[j+1]).empty();
	var PrcsID=$("#PrcsID").val();
	var val=$("#LDII_BRANCNAME"+[j+1]).val()
	
		var UNIQID=""
	
	var VENDID=$("#LDII_VENDORID"+[j+1]).val()
	if(VENDID=="")
	{
	 var UNIQID=$("#LDII_PROPERTYNO"+[j+1]).val()	
	}
	
	
	if(val!="")
    {
	//var xml=UI_getdata(PrcsID,val,"","","","LSW_SGETBANKDTLCUSWS")
	var xml=UI_getdata("LEGAL",val,$("#PrcsID").val(),UNIQID,"","LSW_SGETVALUATION")
	var CusName=$(xml).find('RESULT').html();	
	$("#LDII_VENDORNAME"+[j+1]).append(CusName)
	$("#LDII_VENDORNAME"+[j+1]).material_select("destroy");	
	$("#LDII_VENDORNAME"+[j+1]).material_select();
	var Data=$("#LDII_VENDORID"+[j+1]).val()
	if(Data!="")
	{
	$("#LDII_VENDORNAME"+[j+1]+" option:contains("+Data+")").attr("selected","selected")
	$("#LDII_VENDORNAME"+[j+1]).material_select("destroy");	
	$("#LDII_VENDORNAME"+[j+1]).material_select();
	}	
	}
	}
}



function FIRESIADDRESS(CUSID,ADDRESSFIELD,FITYPECHK)
{
	var CUSID=$("#"+CUSID).val();
	var FITYPECHK=$("#"+FITYPECHK).val();
	var xml=UI_getdata(CUSID,$("#PrcsID").val(),FITYPECHK,"","","LSW_SFIRESIADDR")

	var ADDRESS=$(xml).find('ADDRESS').text();
	$("#"+ADDRESSFIELD).val(ADDRESS)
	$("#"+ADDRESSFIELD).next().addClass('active');
	
}







function FIRES()
{
	var DATA=["FIResidVerify|"];
	var MemoData=DATA[0].split("|")[0];
	var row = $("." + MemoData).find(".DYNROW").length;
	for (j=0;j<row;j++)
	{
	$("#FIRV_VENDNAME"+[j+1]).empty();
	var PrcsID=$("#PrcsID").val();
	var val=$("#FIRV_BRNAME"+[j+1]).val()
	if(val!="")
	{
	//var xml=UI_getdata(PrcsID,val,"","","","LSW_SGETBANKDTLCUSWS")
	var xml=UI_getdata("FI",val,"","","","LSW_SGETVALUATION")
	var CusName=$(xml).find('RESULT').html();	
	$("#FIRV_VENDNAME"+[j+1]).append(CusName)
	$("#FIRV_VENDNAME"+[j+1]).material_select("destroy");	
	$("#FIRV_VENDNAME"+[j+1]).material_select();
	var Data=$("#FIRV_VENDORID"+[j+1]).val()
	if(Data!="")
	{
	$("#FIRV_VENDNAME"+[j+1]+" option:contains("+Data+")").attr("selected","selected")
	$("#FIRV_VENDNAME"+[j+1]).material_select("destroy");	
	$("#FIRV_VENDNAME"+[j+1]).material_select();
	}	
	}
	}
}

function FIOFFICE()
{
	var DATA=["FIOfficeVerify|"];
	var MemoData=DATA[0].split("|")[0];
	var row = $("." + MemoData).find(".DYNROW").length;
	for (j=0;j<row;j++)
	{
	$("#FIOV_VENDNAME"+[j+1]).empty();
	var PrcsID=$("#PrcsID").val();
	var val=$("#FIOV_BRNAME"+[j+1]).val()
	if(val!="")
    {
	//var xml=UI_getdata(PrcsID,val,"","","","LSW_SGETBANKDTLCUSWS")
	var xml=UI_getdata("FI",val,"","","","LSW_SGETVALUATION")
	var CusName=$(xml).find('RESULT').html();	
	$("#FIOV_VENDNAME"+[j+1]).append(CusName)

	var Data=$("#FIOV_VENDORID"+[j+1]).val()
	if(Data!="")
	{
	$("#FIOV_VENDNAME"+[j+1]+" option:contains("+Data+")").attr("selected","selected")
	
	}
	$("#FIOV_VENDNAME"+[j+1]).material_select("destroy");	
	$("#FIOV_VENDNAME"+[j+1]).material_select();
	}
	}

}

function VendorDropdown()
{  
	TechI()
//	TechII()
//	TechIII()
//	LegalI()
//	LegalII()
//	FIRES()
//	FIOFFICE()
}





function VENDORRPT(PAGENAME,ALTERNREFID,VENDORNAME)
{
	var PAGENAME=PAGENAME
	var ALTNUNIQID=ALTERNREFID
	var VENDORNAME=VENDORNAME
	
    var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	
    ajaxindicatorstart("Downloading.. Please wait");
	
	if(PAGENAME=="TechIIPropeInfo")
		{
     	var flname = IOP+LoadFrmXML("RT091")+"&__format=pdf&Param1="+PrcsId+"&Param2="+ALTNUNIQID+"&__filename=TECHNICAL-"+$("#DMY7").val().split("|")[7]+"-"+VENDORNAME+".pdf";
		}
	 else if(PAGENAME=="LegalUpdateReport")
	 {
 	 var flname = IOP+LoadFrmXML("RT092")+"&__format=pdf&Param1="+PrcsId+"&Param2="+ALTNUNIQID+"&__filename=LEGAL-"+$("#DMY7").val().split("|")[7]+"-"+VENDORNAME+".pdf";
	 }
	 else if(PAGENAME=="FIResidVerify")
	 {
 	 var flname = IOP+LoadFrmXML("RT093")+"&__format=pdf&Param1="+PrcsId+"&Param2="+ALTNUNIQID+"&__filename=RESIDENCE-"+$("#DMY7").val().split("|")[7]+"-"+VENDORNAME+".pdf";
	 }
	 else if(PAGENAME=="FIOfficeVerify")
	 {
 	 var flname = IOP+LoadFrmXML("RT094")+"&__format=pdf&Param1="+PrcsId+"&Param2="+ALTNUNIQID+"&__filename=OFFICE-"+$("#DMY7").val().split("|")[7]+"-"+VENDORNAME+".pdf";
	 }
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();

}




function ChkBTNHIDE (RESASSVENDOR,RowHTML,DEVSTATUSVAL)  
{
	
if(RESASSVENDOR == "")
	{
	if(DEVSTATUSVAL!="Approve")
	{
	//$(RowHTML).find(".ViewRpt").hide();
	//$(RowHTML).find(".ValuationInit").show();
	//$(RowHTML).find(".ReAssignPopup").hide();
	}
	/*else
      {
       $(RowHTML).find(".ViewRpt").show();
	  }*/
	
	}

}




function  DEVloadstatus()
{
	
	//Onload TECH3,LEGAL2 P2
	
 var DATA=["PropertyValuer3|TIII_REASSVENDOR|TIII_DEVSTATUS","LegalIIRpt|LDII_REASSVENDOR|LDII_DEVSTATUS|"]
     
	 for (j=0;j<DATA.length;j++)
		 {
	 
		 var ValuationID=DATA[j].split("|")[0];
	     var ValuationStatus=DATA[j].split("|")[1];
	     var DEVSTATUS=DATA[j].split("|")[2];
	     
	 var row = $("." + ValuationID).find(".DYNROW").length;
		 
	 for (i=0;i<row;i++)
	 {
		 
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	
	var RESASSVENDOR = $(HTML).find("[name=" + ValuationStatus + "]").val();
	var DEVSTATUSVAL = $(HTML).find("[name=" + DEVSTATUS + "]").val();
	
	ChkBTNHIDE (RESASSVENDOR,HTML,DEVSTATUSVAL);
	 }
     }
	 
	//Onload TECH3,LEGAL2 P2 	
	
	
}








function HndlCheckMCAClk(Evnt,ASSIGNRESPTOHDN){
	var CINNO = $(Evnt).next().val();
	if(CINNO!=""){
		 $.ajax({
			 url: "/TPLSW/MCAVerfy",
			 data: { CINNO: CINNO, PRCSID: $("#PrcsID").val(), PARAM3: "", PARAM4: "", PARAM5: "",SPNAME: "LSW_SOVRALLHNDLMCA", Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
		       async: true,
		       //dataType: "json",
			    dataType: "text",
		       type: 'POST',
		       success: function OnSuccess_submit(xml1) {
				   if (xml1 == "")
	                  {
	                    alert("Error Occured. Contant IT!!!");	
                          return false;						 
					  }	
		    	   else if(xml1=="REQUESTED")
		    		   {
		    		   $(Evnt).closest('.DYNROW').find("input[name="+ASSIGNRESPTOHDN+"]").val(xml1);
		    		   $(Evnt).closest('.DYNROW').find("."+ASSIGNRESPTOHDN+"").hide();
		    		   alert("MCA Verification is in progress. Kindly check after sometime");
					   $(Evnt).closest('.DYNROW').find('.Save').click();
		    		   return;
		    		   }
		    	   else if(xml1=="FULFILLED"){
		    		   $(Evnt).closest('.DYNROW').find("input[name="+ASSIGNRESPTOHDN+"]").val(xml1);
		    		   $(Evnt).closest('.DYNROW').find("."+ASSIGNRESPTOHDN+"").show();
		    		   alert("Kindly click MCA Verification hyperlink to get the report.")
					   $(Evnt).closest('.DYNROW').find('.Save').click();
		    	   }	
		    	   else{
		    		   alert(xml1);
		    		   return
		    		   
		    	   }
		    	   
		       },
		       error: function (xml1)
		       {
		   			alert("MCA Verification Failed");
		   			return;
		       }
		 		
		 });
	}
	else{
		alert("CIN No is mandatory for MCA Check");
		return
	}
	
	
	
}

function GETMCARPT(Evnt,CINNOFLD){
	var CINNO = $(Evnt).closest('.DYNROW').find("input[name="+CINNOFLD+"]").val();
	var RedirectURL="";
	RedirectURL =window.location.origin+"/TPLSW/MCAVerfyRPT?CINNO=" + CINNO + "&PRCSID=" + $("#PrcsID").val();
	$("#DocView").attr("src", RedirectURL);
	/*$.ajax({
		 url: "/TPLSW/MCAVerfyRPT",
		 data: { CINNO: CINNO, PRCSID: $("#PrcsID").val(), PARAM3: "", PARAM4: "", PARAM5: "",SPNAME: "LSW_SOVRALLHNDLMCA", Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	       async: true,
	       //dataType: "json",
		    dataType: "text",
	       type: 'GET',
	       success: function OnSuccess_submit(xml1) {
	    	   
	       },
	       error: function (xml1)
	       {
	   			alert("MCA Verification Failed");
	   			return;
	       }
		
	});
*/
	}


function CHKPRPVISIT()
{
	
 var DATA=["PropVisit|PRVM_VISITBY"]
     
	 for (j=0;j<DATA.length;j++)
		 {
	 
		 var ValuationID=DATA[j].split("|")[0];
	     var ValuationStatus=DATA[j].split("|")[1];
	     var DEVSTATUS=DATA[j].split("|")[2];
	     
	 var row = $("." + ValuationID).find(".DYNROW").length;
		 
	 for (i=0;i<row;i++)
	 {
		 
	var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
	
	var PROPERTYVISIT = $(HTML).find("[name=" + ValuationStatus + "]").val();
	
	if(PROPERTYVISIT!="")
		{
		
		$(HTML).find('.Resub').text('Re-submit')
		}
	
	 }
     }
	 
}



function MCAPanValid(Obj) {    
    if (Obj.value != "") {
        ObjVal = Obj.value.toUpperCase();
        var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
        var code = /([P p])/;
         var code_chk = ObjVal.substring(3,4);
       
	   if (ObjVal.search(panPat) == -1) {
             alert("Invalid Pan No eg.AAAPA1111A");
             Obj.focus();
             Obj.value="";
             return false;
         }

    }
    
}



function getNegatie(id)
{
	
		if($("input[name='"+$(id).attr('name')+"']:checked").val()=="Yes")
		{

		 $(id).closest('.tbodytrtd').next().find('input').attr('disabled',false);
		}
	 else
	    {
		 $(id).closest('.tbodytrtd').next().find('input').attr('disabled',true);
		 $(id).closest('.tbodytrtd').next().find('input').val('')
	    }
	
}



function GetRCUVENDOR()
{	
	
	var BranchID=$("#RCUI_BRANCHNAME").val();
	var xml=UI_getdata("RCU",BranchID,"","","","LSW_SGETVALUATION")
	$("#RCUI_VENDORNAME").html("")
	$("#RCUI_VENDORNAME").append($(xml).find("RESULT").html());
	$("#RCUI_VENDORNAME").material_select();	
}



function RCUVENDORONLOAD()
{
	
	if($("#RCUI_BRANCHNAME").val()=="")
	{
		
	var xml=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETRCUBRANCH")
    var BRANCH=$(xml).find('BRANCH').text()
    var BRID=$(xml).find('BRID').text()
   $("#RCUI_BRANCHNAME").val(BRANCH) 
   $("#RCUI_BRANCHID").val(BRID) 
	 
	var Data=$("#RCUI_BRANCHID").val()
	$("#RCUI_BRANCHNAME option:contains("+Data+")").attr("selected","selected")	
	$("#RCUI_BRANCHNAME").material_select();		
	}
	

	var val=$("#RCUI_BRANCHNAME").val();
	if(val!="")
    {
	var xml=UI_getdata("RCU",val,"","","","LSW_SGETVALUATION")
	var CusName=$(xml).find('RESULT').html();	
	$("#RCUI_VENDORNAME").append(CusName)
	$("#RCUI_VENDORNAME").material_select("destroy");	
	$("#RCUI_VENDORNAME").material_select();
	var Data=$("#RCUI_VENDORID").val()
	if(Data!="")
	{
	$("#RCUI_VENDORNAME option:contains("+Data+")").attr("selected","selected")
	$("#RCUI_VENDORNAME").material_select("destroy");	
	$("#RCUI_VENDORNAME").material_select();
	}
	}
	

}






function ADVASMART(PROPERTYNO,html){
	
	var PRCSID = $("#PrcsID").val();
	var PROPNO = PROPERTYNO
	var APITYP = 'CHECK';
	var OPXML = UI_getdata(PRCSID,PROPNO,"","",APITYP,"LSW_CHKADVASMRTEXST");
	if($(OPXML).find("APITYP").text()=="order_create" ||$(OPXML).find("APITYP").text()== "get_order_status")
		{
			$.ajax({
				url: "/TPLSW/ADVASMART",
				data: { PRCSID: PRCSID, PROPNO: PROPNO, PARAM3: $(OPXML).find("ORDRID").text(), PARAM4: "", REQTYP: $(OPXML).find("APITYP").text(),SPNAME: "LSW_SOVERALLADVASMART", Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
				dataType: "text",
			       type: 'POST',
			       success: function OnSuccess_submit(xml1) {
			    	  /* var A=xml1.split('~')[0];
			    	   var B=xml1.split('~')[1];
			    	   var C=xml1.split('~')[2];
			    	   if(B=="" && A==""){
			    	   	B="Internal Error Handler";
			    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
			   			return;
			    	   }
			    	   if(B!="" && A==""){
			    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
			   			return;
			    	   }*/
					   var A=xml1.split('~')[0];
			    	   var B=xml1.split('~')[1];
			    	   var C=xml1.split('~')[2];
			    	   var pattern = /https:///;
			    	   if(B=="" && A==""){
			    	   	B="Internal Error Handler";
			    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
						
						
			   			return;
			    	   }
					   
					    if(B==201)
					   {
						 $(html).find("[name=ADSM_STATUS]").val('Y')
						 $(html).find('.FormSave').text('Get Report')
					   }
			    	   if(B!="" && A==""){
						   
						
			    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
			   			return;
			    	   }
					   
					  
					   
					   
			    	   var exists = pattern.test(A);
			    	   if(exists) {
						   
						    window.open(A, '_blank')
						   //alert('Report Generated')
			    	   }
			    	   else
					   {
			    		   alert("Error Header : "+C+"\r\n"+"Status : "+B+"\r\n"+"Message : "+A);
				   			return;
			    	   }
			       },
			       error: function (xml1)
			       {
			   			alert("AdvaSmart Failed");
			   			return;
			       }
			});
		}
	else{
		if (confirm($(OPXML).find("MSG").text())) {
			$.ajax({
				url: "/TPLSW/ADVASMART",
				data: { PRCSID: PRCSID, PROPNO: PROPNO, PARAM3: "", PARAM4: "", REQTYP: $(OPXML).find("APITYP").text().split('|')[1],SPNAME: "LSW_SOVERALLADVASMART", Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
				dataType: "text",
			       type: 'POST',
			       success: function OnSuccess_submit(xml1) {
			    	 /*  var A=xml1.split('~')[0];
			    	   var B=xml1.split('~')[1];
			    	   var C=xml1.split('~')[2];
			    	   if(B=="" && A==""){
			    	   	B="Internal Error Handler";
			    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
			   			return;
			    	   }
			    	   if(B!="" && A==""){
			    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
			   			return;
			    	   }*/
					   
					   var A=xml1.split('~')[0];
			    	   var B=xml1.split('~')[1];
			    	   var C=xml1.split('~')[2];
			    	   var pattern = /https:///;
			    	   if(B=="" && A==""){
			    	   	B="Internal Error Handler";
			    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
			   			return;
			    	   }
					   
					    if(B==201)
					   {
						 $(html).find("[name=ADSM_STATUS]").val('Y')
						 $(html).find('.FormSave').text('Get Report')
					   }
			    	   if(B!="" && A==""){
						
			    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
			   			return;
			    	   }
					   
					  
			    	   var exists = pattern.test(A);
			    	   if(exists) {
						   
						    window.open(A, '_blank')
						 //  alert('Report Generated')
			    	   }
			    	   else{
			    		   alert("Error Header : "+C+"\r\n"+"Status : "+B+"\r\n"+"Message : "+A);
				   			return;
			    	   }
			       },
			       error: function (xml1)
			       {
			   			alert("AdvaSmart Failed");
			   			return;
			       }
			});
			} else {
			  // Do nothing!
			}
	}
	
	
	
	
}





function ADVASMARTMSTR(){
	var REQAPITYP = 'get_states';
//	var REQAPITYP="get_locality_by_registrar";
	//var REQAPITYP="get_locality_by_district";
	//var REQAPITYP="get_locality_by_registrar";
	//var APITYP = 'CHECK';
	var APITYP = '1';
	var OPXML = UI_getdata(APITYP,"","","",REQAPITYP,"LSW_CHKADVASMRTMSTRDTL");
	$("#ADSM_STATE").append($(OPXML).find("RESULT").html());
   // $('#ADSM_STATE').material_select(); 
	if($(OPXML).find("RESULT").text()==REQAPITYP){
		$.ajax({
			url: "/TPLSW/ADVASMARTMSTR",
			data: { PARAM1: APITYP, PARAM2: "", PARAM3: "", PARAM4: "", PARAM5: REQAPITYP,SPNAME: "LSW_OVERALLADVASMRTSTRHNDLR", Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
			dataType: "text",
		       type: 'POST',
		       success: function OnSuccess_submit(xml1) {
		    	   var A=xml1.split('~')[0];
		    	   var B=xml1.split('~')[1];
		    	   var C=xml1.split('~')[2];
		    	   var pattern = /option/;
		    	   if(B=="" && A==""){
		    	   	B="Internal Error Handler";
		    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
		   			return;
		    	   }
		    	   if(B!="" && A==""){
		    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
		   			return;
		    	   }
		    	   var exists = pattern.test(A);
		    	   if(exists) {
					   alert('Option 1')
					   var exists1 = pattern.test(B);
			    	   if(exists1) {
						   alert('Option 1')
						}
					}
		    	   else
				   {
		    		   alert("Error Header : "+C+"\r\n"+"Status : "+B+"\r\n"+"Message : "+A);
			   			return;
		    	   }
		    	   
		       },
		       error: function (xml1)
		       {
		   			alert("AdvaSmart Failed");
		   			return;
		       }
		});
	}
}




function ADVASMARTMSTRState(State,Distrct,StateSRO){
	
	var row=$($('.ADVSMART').find(event.target).closest('.DYNROW')[0]).attr('data-row');
	var State=$("#"+State+row).val();
	
	
	
	
	var REQAPITYP = 'get_districts';
   // var REQAPITYP="get_locality_by_registrar";
	//var REQAPITYP="get_locality_by_district";
	//var REQAPITYP="get_locality_by_registrar";
	//var APITYP = 'CHECK';
	var APITYP = State
	
	//var OPXML = UI_getdata(APITYP,"","","",REQAPITYP,"LSW_CHKADVASMRTMSTRDTL");
//	$("#"+Distrct+row).html("")
  //  $("#"+Distrct+row).append($(OPXML).find("RESULT").html());
//	$("#"+Distrct+row).material_select();
   
	/*if($(OPXML).find("RESULT").text()==REQAPITYP){*/
		$.ajax({
			url: "/TPLSW/ADVASMARTMSTR",
			data: { PARAM1: APITYP, PARAM2: "", PARAM3: "", PARAM4: "", PARAM5: REQAPITYP,SPNAME: "LSW_OVERALLADVASMRTSTRHNDLR", Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
			dataType: "text",
		       type: 'POST',
		       success: function OnSuccess_submit(xml1) {
		    	   var A=xml1.split('~')[0];
		    	   var B=xml1.split('~')[1];
		    	   var C=xml1.split('~')[2];
		    	   var pattern = /option/;
		    	   if(B=="" && A==""){
		    	   	B="Internal Error Handler";
		    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
		   			return;
		    	   }
		    	   if(B!="" && A==""){
		    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
		   			return;
		    	   }
		    	   var exists = pattern.test(A);
		    	   if(exists) {
					   
					$("#"+Distrct+row).html("")
					$("#"+Distrct+row).append('<option value="" selected>--Select--</option>');
                    $("#"+Distrct+row).append(A);
                    $("#"+Distrct+row).material_select();
					 //  alert('Option 1')
					   var exists1 = pattern.test(B);
			    	   if(exists1) {
						 //  alert('Option 1')
					$("#"+StateSRO+row).html("")
					$("#"+StateSRO+row).append('<option value="" selected>--Select--</option>');
                    $("#"+StateSRO+row).append(B);
                    $("#"+StateSRO+row).material_select();
						}
					}
		    	   else
				   {
		    		   alert("Error Header : "+C+"\r\n"+"Status : "+B+"\r\n"+"Message : "+A);
			   			return;
		    	   }
		    	   
		       },
		       error: function (xml1)
		       {
		   			alert("AdvaSmart Failed");
		   			return;
		       }
		});
	
}






function ADVASMARTMSTRDISTRICT(District,Locality,DistSRO){
	
	var row=$($('.ADVSMART').find(event.target).closest('.DYNROW')[0]).attr('data-row');
	var District=$("#"+District+row).val();
	
//	var REQAPITYP = 'get_districts';
//   var REQAPITYP="get_locality_by_registrar";
	var REQAPITYP="get_locality_by_district";
	//var REQAPITYP="get_locality_by_registrar";
	//var APITYP = 'CHECK';
	var APITYP = District
	
	//var OPXML = UI_getdata(APITYP,"","","",REQAPITYP,"LSW_CHKADVASMRTMSTRDTL");
//	$("#"+Distrct+row).html("")
  //  $("#"+Distrct+row).append($(OPXML).find("RESULT").html());
//	$("#"+Distrct+row).material_select();
   
	/*if($(OPXML).find("RESULT").text()==REQAPITYP){*/
		$.ajax({
			url: "/TPLSW/ADVASMARTMSTR",
			data: { PARAM1: APITYP, PARAM2: "", PARAM3: "", PARAM4: "", PARAM5: REQAPITYP,SPNAME: "LSW_OVERALLADVASMRTSTRHNDLR", Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
			dataType: "text",
		       type: 'POST',
		       success: function OnSuccess_submit(xml1) {
		    	   var A=xml1.split('~')[0];
		    	   var B=xml1.split('~')[1];
		    	   var C=xml1.split('~')[2];
		    	   var pattern = /option/;
		    	   if(B=="" && A==""){
		    	   	B="Internal Error Handler";
		    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
		   			return;
		    	   }
		    	   if(B!="" && A==""){
		    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
		   			return;
		    	   }
		    	   var exists = pattern.test(A);
		    	   if(exists) {
					   
					$("#"+Locality+row).html("")
					 $("#"+Locality+row).append('<option value="" selected>--Select--</option>');
                    $("#"+Locality+row).append(A);
                    $("#"+Locality+row).material_select();
					 //  alert('Option 1')
					   var exists1 = pattern.test(B);
			    	   if(exists1) {
						 //  alert('Option 1')
					$("#"+DistSRO+row).html("")
					 $("#"+DistSRO+row).append('<option value="" selected>--Select--</option>');
                    $("#"+DistSRO+row).append(B);
                    $("#"+DistSRO+row).material_select();
						}
					}
		    	   else
				   {
		    		   alert("Error Header : "+C+"\r\n"+"Status : "+B+"\r\n"+"Message : "+A);
			   			return;
		    	   }
		    	   
		       },
		       error: function (xml1)
		       {
		   			alert("AdvaSmart Failed");
		   			return;
		       }
		});
	
}







function ADVASMARTMSTRLOCALITY(Locality,LocalSRO){
	
	var row=$($('.ADVSMART').find(event.target).closest('.DYNROW')[0]).attr('data-row');
	var Locality=$("#"+Locality+row).val();
	
//	var REQAPITYP = 'get_districts';
   var REQAPITYP="get_locality_by_registrar";
//	var REQAPITYP="get_locality_by_district";
	//var REQAPITYP="get_locality_by_registrar";
	//var APITYP = 'CHECK';
	var APITYP = Locality
	
	//var OPXML = UI_getdata(APITYP,"","","",REQAPITYP,"LSW_CHKADVASMRTMSTRDTL");
//	$("#"+Distrct+row).html("")
  //  $("#"+Distrct+row).append($(OPXML).find("RESULT").html());
//	$("#"+Distrct+row).material_select();
   
	/*if($(OPXML).find("RESULT").text()==REQAPITYP){*/
		$.ajax({
			url: "/TPLSW/ADVASMARTMSTR",
			data: { PARAM1: APITYP, PARAM2: "", PARAM3: "", PARAM4: "", PARAM5: REQAPITYP,SPNAME: "LSW_OVERALLADVASMRTSTRHNDLR", Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
			dataType: "text",
		       type: 'POST',
		       success: function OnSuccess_submit(xml1) {
		    	   var A=xml1.split('~')[0];
		    	   var B=xml1.split('~')[1];
		    	   var C=xml1.split('~')[2];
		    	   var pattern = /option/;
		    	   if(B=="" && A==""){
		    	   	B="Internal Error Handler";
		    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
		   			return;
		    	   }
		    	   if(B!="" && A==""){
		    	   	alert("Status : "+B+"\r\n"+"Message : "+C);
		   			return;
		    	   }
		    	   var exists = pattern.test(A);
		    	   if(exists) {
					   
					$("#"+LocalSRO+row).html("")
					
					
					 $("#"+LocalSRO+row).append('<option value="" selected>--Select--</option>');
                    $("#"+LocalSRO+row).append(A);
                    $("#"+LocalSRO+row).material_select();
					 //  alert('Option 1')
					   var exists1 = pattern.test(B);
			    	   if(exists1) {
						 //  alert('Option 1')
					
						}
					}
		    	   else
				   {
		    		   alert("Error Header : "+C+"\r\n"+"Status : "+B+"\r\n"+"Message : "+A);
			   			return;
		    	   }
		    	   
		       },
		       error: function (xml1)
		       {
		   			alert("AdvaSmart Failed");
		   			return;
		       }
		});
	
}





function ADVDROPDOWN()
{
	var DATA=["ADVSMART|"];
	var MemoData=DATA[0].split("|")[0];
	var row = $("." + MemoData).find(".DYNROW").length;
	for (j=0;j<row;j++)
	{
		
	var DIST=$("#ADSM_DISTR"+[j+1]).val()
    var DISTNAME=$("#ADSM_DISTRNAME"+[j+1]).val()	
	
	 $("#ADSM_DISTR"+[j+1]).empty();
	 $("#ADSM_DISTR"+[j+1]).val('');
	 $("#ADSM_DISTR"+[j+1]).material_select("destroy");	
	 $("#ADSM_DISTR"+[j+1]).material_select();	
	 
	 var optn1="<option  value='"+DIST+"'>" + DISTNAME + "</option>"
		        $("#ADSM_DISTR"+[j+1]).append(optn1)
		        $("#ADSM_DISTR"+[j+1]+" option:contains("+DISTNAME+")").attr("selected","selected")
                $("#ADSM_DISTR"+[j+1]).material_select();
	
	var LOCALITY=$("#ADSM_LOCALITY"+[j+1]).val()
    var LOCALITYNAME=$("#ADSM_LOCALITYNAME"+[j+1]).val()
       $("#ADSM_LOCALITY"+[j+1]).empty();
	 $("#ADSM_LOCALITY"+[j+1]).val('');
	 $("#ADSM_LOCALITY"+[j+1]).material_select("destroy");	
	 $("#ADSM_LOCALITY"+[j+1]).material_select();		
	 var optn2="<option  value='"+LOCALITY+"'>" + LOCALITYNAME + "</option>"
		        $("#ADSM_LOCALITY"+[j+1]).append(optn2)
		        $("#ADSM_LOCALITY"+[j+1]+" option:contains("+LOCALITYNAME+")").attr("selected","selected")
                $("#ADSM_LOCALITY"+[j+1]).material_select();
	
	
	var STATESRO=$("#ADSM_STATESRO"+[j+1]).val()
    var STATESRONAME=$("#ADSM_STATESRONAME"+[j+1]).val()	
	
	$("#ADSM_STATESRO"+[j+1]).empty();
	 $("#ADSM_STATESRO"+[j+1]).val('');
	 $("#ADSM_STATESRO"+[j+1]).material_select("destroy");	
	 $("#ADSM_STATESRO"+[j+1]).material_select();	
	 
	 
	 var optn3="<option  value='"+STATESRO+"'>" + STATESRONAME + "</option>"
		        $("#ADSM_STATESRO"+[j+1]).append(optn3)
		        $("#ADSM_STATESRO"+[j+1]+" option:contains("+STATESRONAME+")").attr("selected","selected")
                $("#ADSM_STATESRO"+[j+1]).material_select();
	
	
	var DISRO=$("#ADSM_DISTRSRO"+[j+1]).val()
    var DISRONAME=$("#ADSM_DISTRSRONAME"+[j+1]).val()	
	
	$("#ADSM_DISTRSRO"+[j+1]).empty();
	 $("#ADSM_DISTRSRO"+[j+1]).val('');
	 $("#ADSM_DISTRSRO"+[j+1]).material_select("destroy");	
	 $("#ADSM_DISTRSRO"+[j+1]).material_select();	
	 
	 var optn4="<option  value='"+DISRO+"'>" + DISRONAME + "</option>"
		        $("#ADSM_DISTRSRO"+[j+1]).append(optn4)
		        $("#ADSM_DISTRSRO"+[j+1]+" option:contains("+DISRONAME+")").attr("selected","selected")
                $("#ADSM_DISTRSRO"+[j+1]).material_select();
	
	var LOCALITYSRO=$("#ADSM_LOCALITYSRO"+[j+1]).val()
    var LOCALITYSRONAME=$("#ADSM_LOCALITYSRONAME"+[j+1]).val()	
	
	$("#ADSM_LOCALITYSRO"+[j+1]).empty();
	 $("#ADSM_LOCALITYSRO"+[j+1]).val('');
	 $("#ADSM_LOCALITYSRO"+[j+1]).material_select("destroy");	
	 $("#ADSM_LOCALITYSRO"+[j+1]).material_select();
	 
	 var optn5="<option  value='"+LOCALITYSRO+"'>" + LOCALITYSRONAME + "</option>"
		        $("#ADSM_LOCALITYSRO"+[j+1]).append(optn5)
		        $("#ADSM_LOCALITYSRO"+[j+1]+" option:contains("+LOCALITYSRONAME+")").attr("selected","selected")
                $("#ADSM_LOCALITYSRO"+[j+1]).material_select();
	
	
	}

}



function  ADVREPORTVIEW()
{

var PVrow = $(".ADVSMART").find(".DYNROW").length;

for (i=0;i<PVrow;i++)
{
	 
var HTML =	 $(".ADVSMART").find(".DYNROW")[i];

var STATUS = $(HTML).find("[name=ADSM_STATUS]").val();	 	 
if(STATUS=="Y")
{
  $(HTML).find('.FormSave').text('Get Report')
}


}

}






function MCAADDOFFICE()
{
	 var row = $(".MCAVerify").find(".DYNROW").length;
	 
	 for (i=0;i<row;i++)
	 {
		 
	   var HTML =	 $(".MCAVerify").find(".DYNROW")[i];
       var RptGEN =$(HTML).find("input[name='MCAV_RPTGEBERATION']:checked").val()	
		if(RptGEN=="Auto")
		{
			$(HTML).find(".rptupload").hide(); 
			$(HTML).find(".INTDSBV").show(); 
			
		}
		else if(RptGEN=="Manual")
		{
          $(HTML).find(".rptupload").show(); 
          $(HTML).find(".INTDSBV").hide(); 
        }
		else
         	{   
			    $(HTML).find('input:radio[name=MCAV_RPTGEBERATION]')[1].checked = true;
				$(HTML).find(".rptupload").hide(); 
				$(HTML).find(".INTDSBV").show(); 
				
			}
			
		
	 }

}



function MCACINCHANGE(Evnt,ASSIGNRESPTOHDN)
{

$(Evnt).closest('.DYNROW').find("input[name="+ASSIGNRESPTOHDN+"]").val('');
$(Evnt).closest('.DYNROW').find('.MCAV_MCARPTREQ').hide();
		    		
}

function InitRCU(Evnt)
{
	var GRP = $("#"+$(Evnt).attr("data-info").split("|")[0]).val();
	var UNIQid = $("#"+$(Evnt).attr("data-info").split("|")[1]).val();
	var UNIQid1 = $("#"+$(Evnt).attr("data-info").split("|")[1]).val()+GRP;
	var OPXML = UI_getdata(GRP,"","","","","LSW_CHKIRCUGROUP");
    var GRP= $(OPXML).find("RCU").text()
	
	var WFVndACTVINIT1 = WFVndActvInit($("#ActvID").val(),$("#PrcsID").val()+"|VendorInitiate|Vendor|var_status=SVF&var_statusHES="+GRP+"&var_INFO1="+GRP+"~"+GRP+"~"+UNIQid+"~"+UNIQid1+"|ADMIN","LSW_SWFACTVINITCALL");	
	if (WFVndACTVINIT1 == "Success")
			{
			var OPXML = UI_getdata(GRP,UNIQid,UNIQid1,"","","LSW_SUPDATEIRCUGROUP");
			alert("File Assigned");
			}
		else
			{
			alert("Initiation Failed");
			}
}




function CheckFutureDt(Evnt)
{
	var APLNDT=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETAPPLNDATE")

   // $('.ISFutureDateFields').on("change", function () {
        //Total time for one day
        var t1 = $(APLNDT).find("APPLNDATE").text();
        var datefield_id = $(Evnt).attr('id');
        var t2 = document.getElementById(datefield_id).value;

        var one_day = 1000 * 60 * 60 * 24;  //Here we need to split the inputed dates to convert them into standard format for further execution
        var x = t1.split("-");
        var y = t2.split("/");   //date format(Fullyear,month,date) 

        var date1 = new Date(x[2], (x[1] - 1), x[0]);

        // it is not coded by me,but it works correctly,it may be useful to all

        var date2 = new Date(y[2], (y[1] - 1), y[0])
        var month1 = x[1] - 1;
        var month2 = y[1] - 1;

        //Calculate difference between the two dates, and convert to days

        Diff = Math.ceil((date2.getTime() - date1.getTime()) / (one_day));

		if(t2!="")
		{
         if (Diff < 0) {
			$('#'+datefield_id).focus();
			document.getElementById(datefield_id).value = "";
           // alert(LoadFrmXML("V0091")+'|'+datefield_id);
			alert(LoadFrmXML("V0091"));
            return 
        }
		}
		
		t1 = get2date();
        datefield_id = $(Evnt).attr('id');
        t2 = document.getElementById(datefield_id).value;

        
        x = t1.split("-");
        y = t2.split("/");   //date format(Fullyear,month,date) 

        date1 = new Date(x[2], (x[1] - 1), x[0]);

        // it is not coded by me,but it works correctly,it may be useful to all

        date2 = new Date(y[2], (y[1] - 1), y[0])
        month1 = x[1] - 1;
        month2 = y[1] - 1;

        //Calculate difference between the two dates, and convert to days

        Diff = Math.ceil((date2.getTime() - date1.getTime()) / (one_day));

		if(t2!="")
		{
        if (Diff >= 1) {
		
			$('#'+datefield_id).focus();
		 	document.getElementById(datefield_id).value = "";
           //alertify.alert(LoadFrmXML("V0090")+'|'+datefield_id);
		   
		   window.alert(LoadFrmXML("V0090"));
		  
		  
            return 
        }
		}
}
function ChkAdr()
{
	//var TechI=$("#TEVD_PROPERTYNO").val()
	var ResI=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKSECTYPE");
	var ChkAddI=$(ResI).find("RESULT").text();	
	if(ChkAddI=='Y')	
	{
		$(".CHKADRS").hide();		
	}
	else
	{
		$(".CHKADRS").show();	
	}
	
	//var TechII=$("#TVII_PROPERTYNO").val()
	var ResII=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKSECTYPE");
	var ChkAddII=$(ResII).find("RESULT").text();	
	if(ChkAddII=='Y')	
	{
		$(".CHKADRSII").hide();		
	}
	else
	{
		$(".CHKADRSII").show();	
	}
	
	//var TechIII=$("#TIII_PROPERTYNO").val()
	var ResIII=UI_getdata($("#PrcsID").val(),"","","","","LSW_SCHKSECTYPE");
	var ChkAddIII=$(ResIII).find("RESULT").text();	
	if(ChkAddIII=='Y')	
	{
		$(".CHKADRSIII").hide();		
	}
	else
	{
		$(".CHKADRSIII").show();	
	}
	
	
	
} 

 function Applicable(Evnt)
   {
	   
	  var row=$(Evnt).closest('.DYNROW').attr('data-row')
	var Statu=$("#TEVD_STATUS"+row).val()
	var Wav=$(Evnt).val();
	  if(Statu=="To be Initiated")
	  {
	 if(Wav=="Waiver"||Wav=="Not Applicable")
	 {
		  $(Evnt).closest('.DYNROW').find('.ValuationInitone').hide();
		  
		  
		 
	 }
	 else
	 {
		 $(Evnt).closest('.DYNROW').find('.ValuationInitone').show();

	 }
	  }
	 
   }
   
   /*  function AppLoad(ValuationStatus,HTML)
   {
	     var DATA=["PropertyValuer1|TEVD_STATUS|TEVD_ADDPROPERTY"]
     
		for (j=0;j<DATA.length;j++)
		{
	 
			var ValuationID=DATA[j].split("|")[0];
			var ValuationStatus=DATA[j].split("|")[1];
			var FIOAddr=DATA[j].split("|")[2];
		
			var row = $("." + ValuationID).find(".DYNROW").length;
			for (i=0;i<row;i++)
			{
				var Wav=$(HTML).val();
				var statu=$("#"+ValuationStatus+row).val();
				if(statu=="To be Initiated")
				{
					if(Wav=="Waiver"||Wav=="Not Applicable")
					{
						$(HTML).closest('.DYNROW').find('.ValuationInit').hide();
			
					
					}
					else
					{
						$(HTML).closest('.DYNROW').find('.ValuationInit').show();
				
					}
				}
		}
	 }
   }  */


     function Notapplicable(Evnt)
   {
	  var row=$(Evnt).closest('.DYNROW').attr('data-row')
	   var Statu=$("#TVII_STATUS"+row).val()
	  var Wav=$(Evnt).val();
	  if(Statu=="To be Initiated")
	  {
		if(Wav=="Waiver"||Wav=="Not Applicable")
		{
			$(Evnt).closest('.DYNROW').find('.ValuationInittwo').hide();
			
		}
		else
		{
			$(Evnt).closest('.DYNROW').find('.ValuationInittwo').show();
			
		}
	  }
   } 
   
   /*  function NotappLoad(ValuationStatus,HTML)
   {
	   
	  var Wav=$(HTML).val();
	   var statu=$(ValuationStatus).val();
	 if(statu=="To be Initiated")
	 {
	 if(Wavir=="Waiver"||Wavir=="Not Applicable")
	 {
		  $(HTML).closest('.DYNROW').find('.ValuationInit').hide();
		 
	 }
	 else
	 {
		 $(HTML).closest('.DYNROW').find('.ValuationInit').show();
		 
	 }
	 }
   } */
   
   function AppWaiver(Evnt)
   {
	   var row=$(Evnt).closest('.DYNROW').attr('data-row')
	   var Statu=$("#TIII_STATUS"+row).val()
	  var Wav=$(Evnt).val();
	  if(Statu=="To be Initiated")
	  {
	  
	 if(Wav=="Waiver"||Wav=="Not Applicable")
	 {
		  $(Evnt).closest('.DYNROW').find('.ValuationInitthree').hide();
		 
	 }
	 else
	 {
		 $(Evnt).closest('.DYNROW').find('.ValuationInitthree').show();
		 
	 }
	  }
   }
  /*  function Chkinit()
   {
	   var Chk=$(Evnt).val();
	   if(Chk=="Initiate")
	   {
		   $(Evnt).closest('.DYNROW').find('.APPLIC').hide();
	   }
   } */
   
   
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
$('#'+STDCode).attr('disabled',false)
$('#'+STDCode).val('');
$('#'+STDCode).next().removeClass('active');
//$(idval).val('');
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
