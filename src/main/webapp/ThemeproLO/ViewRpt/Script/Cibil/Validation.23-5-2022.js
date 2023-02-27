function GridControlCIBILReportDUDUPE (popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
    	  
		   { "width": "20%", "targets": 0 },
		    { "width": "15%", "targets": 1 },
		  
		    { targets: 2,"width": "15%", "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FIEG_CIBILSCOREI'+rowno+'" value="'+data+'" style="" name="FIEG_CIBILSCOREI'+rowno+'" maxlength="40" class="form-control Btxt10 DSVLBL form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
				
					return htmldata[0].outerHTML;   		
					
		         } 
				 },
	   { targets: 3,"width": "10%", "render": function ( data, type, row, meta ) {                            
			
			 var rowno = meta.row;	 
				var HTML =	'<span><input type="text" id="FIEG_CIBILSCOREII'+rowno+'" value="'+data+'" style="" name="FIEG_CIBILSCOREII'+rowno+'" maxlength="40" class="form-control Btxt10 DSVLBL form-control">';			 
				HTML = HTML + '</span>'; 
					 
				var htmldata = $(HTML);
					

					return htmldata[0].outerHTML;   		
					
		         } 
				 },
		{ "width": "15%", "targets": 4 },				 
 		 { targets: 5,"width": "25%", "render": function ( data, type, row, meta ) {                            

 			var rowno = meta.row;       			 

	var viewrpt = '<span class="HyperControls">'
    viewrpt = viewrpt + '<a type="button" onclick="GridCibilScrRpt(this)" style="padding-left: 0rem;" class="Btxt4" href="#">View Report</a>'        
    viewrpt = viewrpt + '</span>'
		
var BTN = "";
	
			if (data == "NOT GENERATED")
			 {
				BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" id="GridCIBIL'+rowno+'" style="margin:1rem" class=" waves-effect BTNHIDE btn-yelInplain btn-sm">Initiate CIBIL</button></span>' 
			 }
			else  if (data == "GENERATED")
			 {
				 BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" style="margin:1rem" id="GridCIBIL'+rowno+'" class=" waves-effect BTNHIDE btn-GrnInplain btn-sm">Re-Initiate CIBIL</button></span>' 
				//BTN = '<span><button type="button"  id="GridCIBIL'+rowno+'" style="margin:1rem" class=" waves-effect btn-GrnInplain btn-sm">CIBIL Initiated</button></span>' 
			 } 
			else  if (data == "FAILED")
			 {
				BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" style="margin:1rem" id="GridCIBIL'+rowno+'" class=" waves-effect btn-RedInplain BTNHIDE btn-sm">Failed</button></span>' 
			 } 
			 else  if (data == "REGENERATE")
			 {
				BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" style="margin:1rem" id="GridCIBIL'+rowno+'" class=" waves-effect BTNHIDE btn-RedInplain btn-sm">Re-Initiate CIBIL</button></span>' 
			 } 
			 
			  else  if (data == "NOTAPPLICABLE")
			 {
				BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" style="display:none" id="GridCIBIL'+rowno+'" class=" waves-effect BTNHIDE btn-RedInplain btn-sm">Re-Initiate CIBIL</button></span>' 
			 } 
			 else{
				 BTN = '<span><button type="button" onclick="GridCIBILValidate(this);" id="GridCIBIL'+rowno+'" style="margin:1rem" class=" waves-effect BTNHIDE btn-yelInplain btn-sm">Initiate CIBIL</button></span>' 
			 }
			 
 		var HTML =  '<div>' +  viewrpt + BTN + '</div>';

		var htmldata = $(HTML);
 			
 return htmldata[0].outerHTML;
          } 
 		 }
      ],
          "fnDrawCallback": function (oSettings) {
         }

         }); 
 }

 /*
 
function GridCibilScrRpt(evnt)
{	
	var IOP=LoadFrmXML("RS006");
	var Path=window.location.origin
	IOP=Path+IOP
	var URL = $($(evnt).closest('.tbodytr').find('.tbodytrtd')[7]).text();
	
	var URLVal=URL.split("\\")[0]
	var Curl= $("#DMY1").val()
		if (URL =="")
		{
			alert("No Report is available to view");
			return false;
		}
		else if (URLVal != "Attachments")
		{
			//RedirectURL = Curl.replace("XXDMSIDXX",(URL).split("/")[0]);
			
	RedirectURL =window.location.origin+"/TPLSW/DMSVIEW?PrcsID=" + $("#PrcsID").val() + "&DMSID=" + (URL).split("\\")[0];
	
	$("#DocView").attr("src", RedirectURL);
	
			
			
		//	window.open(RedirectURL);

		}
		else
		{
			var DocUrl=IOP+URL;
			window.open(DocUrl);
		}
}
   */

   
   function GridCibilScrRpt(evnt)
{
	
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	
     var Cusid=$($(evnt).closest('.tbodytr').find('.tbodytrtd')[9]).text() 



    ajaxindicatorstart("Downloading.. Please wait");
	
	 
	var flname = IOP+LoadFrmXML("RT0119")+"&__format=pdf&Param1="+PrcsId+"&Param2="+Cusid+"&__filename=CibilReport_"+$(".FormPageMultiTab li.active").text()+".pdf";
	

	   ajaxindicatorstop();
	  
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();



}



function ViewCblRPT(CIBIL)
{
	if ($("#CIBIL").text() == "Initiate CIBIL")
	{
		alert("Initiate CIBIL to View Reports");
	}
	else
	{
		$("#CBLViewRpt").click();
		$("#CCCibilRptModal").click();
	}	
}


/*
function GridCIBILValidate(evnt)
{
	
	var CIBIL=LoadFrmXML("V0179");
	
	if(CIBIL=="CIBIL Yes")
	  {
	var PrcsId=$('#PrcsID').val()
  // var CusRefID=UI_getdata(PrcsId,"","","","","LSW_SGETAPPLREFID")	
	//var json = $.xml2json(CusRefID.replace(/&/g,"and"));
	var fnlresult="";
	//for (i=0;i<$(CusRefID).find('a').length;i++)
	//{
	var appno=$($(evnt).closest('.tbodytr').find('.tbodytrtd')[8]).text();;
	var cusid=$($(evnt).closest('.tbodytr').find('.tbodytrtd')[9]).text();;
	$.ajax({
        url: "/TPLSW/CIBILIntegration",
        type: 'POST',
        data: {appno:appno,cusid:cusid,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        async:true,
        success: function(stm){        
       // var obj = JSON.parse(JSON.stringify(stm))
            if(stm != "")
                 {
        	 var obj = JSON.parse(stm).Status
        
        	 if(obj=="Success")
        		 {
        		 //alert('CIBIL Report Generated');
				 
			 fnlresult="Success";
			
			//$("#CBLViewRpt").click();
			
			if (fnlresult == "Success")
	{
			 alert("CIBIL Initiated");
			 $("#CBLViewRpt").trigger('click')
        		 $("#CIBIL0").text('CIBIL Initiated');
        		 $("#CIBIL0").addClass("btn-GrnInplain");	
        		 $("#CIBIL0").removeClass("btn-yelInplain");
        		 $("#CIBIL0").removeClass("btn-RedInplain"); 
	}
	else
    {
		alert("CIBIL Initiation Failed");
		$("#CBLViewRpt").trigger('click')
        $("#CIBIL0").text('CIBIL Initiation Failed');
        $("#CIBIL0").removeClass("btn-GrnInplain");	
		$("#CIBIL0").removeClass("btn-yelInplain");
        $("#CIBIL0").addClass("btn-RedInplain");
    }
			
			
		    //$("#"+Verify).val('Verified')
        		 }
				 else
				 {
					  alert(JSON.parse(stm).Status);
				 }
    }
                 else
                   {
                     alert('CIBIL Failed');
                   }
        	 
    },
    error: function(stm) {
    	 //window.alert(LoadFrmXML("V0125"))
    	 alert("Fail");
    	   }
});
	//}	
 }
	  else
	  {
		   alert('CIBIL Integration not available')
		  return;
	  }	
}*/


function GridCIBILValidate(evnt)
{
	var CIBIL=LoadFrmXML("V0179");
	
	if(CIBIL=="CIBIL Yes")
	  {
		 
        $("#Save").click();		 
		  
	var PrcsId=$('#PrcsID').val()
     // var CusRefID=UI_getdata(PrcsId,"","","","","LSW_SGETAPPLREFID")	
	//var json = $.xml2json(CusRefID.replace(/&/g,"and"));
	var fnlresult="";
	var ID=$(evnt).attr('id');
	//for (i=0;i<$(CusRefID).find('a').length;i++)
	//{
	var appno=$($(evnt).closest('.tbodytr').find('.tbodytrtd')[8]).text();;
	var cusid=$($(evnt).closest('.tbodytr').find('.tbodytrtd')[9]).text();;
	$.ajax({
        url: "/TPLSW/CIBILService",
        type: 'POST',
        data: {Param1:appno,Param2:cusid,SPNAME:"LSW_SCIBILAPICREATE",PRCSID:PrcsId,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
        async:true,
        success: function(stm){        
       // var obj = JSON.parse(JSON.stringify(stm))
            if(stm != "")
                 {
        	// var obj = JSON.parse(stm).Status
				var result=stm;
               stm=stm.replaceAll(" ","");
			   
      if(stm=="Success")
        {	 
        	//alert('CIBIL Report Generated'); 
			//fnlresult="Success";
			//$("#CBLViewRpt").click();
			
	         alert("CIBIL Initiated");
	         $("#CBLViewRpt").trigger('click');
             $("#"+ID).text('CIBIL Initiated');
             $("#"+ID).addClass("btn-GrnInplain");	
             $("#"+ID).removeClass("btn-yelInplain");
             $("#"+ID).removeClass("btn-RedInplain"); 
	    }
	 else
      {
	    alert("CIBIL Initiation Failed - "+result);
	    $("#CBLViewRpt").trigger('click')
        $("#"+ID).text('CIBIL Initiation Failed');
        $("#"+ID).removeClass("btn-GrnInplain");	
	    $("#"+ID).removeClass("btn-yelInplain");
        $("#"+ID).addClass("btn-RedInplain");
      }
          }
        else
         {
           alert('CIBIL Failed');
         }
        },
       error: function(stm) {
    	 //window.alert(LoadFrmXML("V0125"))
    	  alert("Fail");
    	}
});
 }
 else
 {
  alert('CIBIL Integration not available')
  return;
 }	
}

function DocFldUpldHndlr(id,docu,KYCName,UploadView)
{
	
var Val=$(id).val()


if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain= LoadFrmXML("RS001");
    var usrpwd= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("PrcsID");
    var FormName= 'CIBIL';
    var CusID=''
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
	 //names=names.slice(0,-1)+'.'+FileType	
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
				$(id).closest('td').find('input[type="file"]').attr('disabled',false)
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
				$('.'+UploadView).show();
				$('.DDV').show();
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

function InsCIBILData()
{
 var CUSID=$("#FIEG_CUSID").val();
 var INIDate=$("#FIEG_DATEOFINIT").val();
 var ScoreI=$("#FIEG_CIBILSCOREI").val();
 var ScoreII=$("#FIEG_CIBILSCOREII").val();
 var Upload=$("#FIEG_UPLOAD").val();
 
 var xml=UI_getdata($("#PrcsID").val(),CUSID+'|'+INIDate+'|'+ScoreI+'|'+ScoreII+'|'+Upload,"","","","LSW_SINSCIBILGRD")

}

function DisbCusName()
{
	var j= $("#CBRTable").find('.tbodytr').length
    
	for(var i=0;i<j;i++)
	{
		if($($($("#CBRTable").find('.tbodytr')[i]).find('.tbodytrtd')[4]).text()=="COMPLETED")
		 {
			var CusId=$($($("#CBRTable").find('.tbodytr')[i]).find('.tbodytrtd')[9]).text()
			
			$("#FIEG_CUSID").find("option[value='"+CusId+ "']").prop('disabled',true)
		 }
   }
}

function CheckCusType()
{
	var CusId=$("#FIEG_CUSID").val();
	
	var xml=UI_getdata($("#PrcsID").val(),CusId,"","","","LSW_SCHECKCUSTYP")
	
	if($(xml).find('CUSTYPE').text() == "Non-Individual")
	{
		$("#FIEG_CIBILSCOREI").removeClass('CIBILMndtry')
		$("#FIEG_CIBILSCOREI").next().find(".MndtryAstr").html("");
	}
	else
	{
		$("#FIEG_CIBILSCOREI").addClass('CIBILMndtry');
		$("#FIEG_CIBILSCOREI").next().find(".MndtryAstr").html("*");
	}
}
