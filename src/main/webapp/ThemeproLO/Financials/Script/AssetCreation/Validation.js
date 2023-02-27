function SUBTRACTIONAMOUNT(MAINAMT,SUBAMT,TOTALFILED)
{
	var MAINAMT= $('#'+MAINAMT).val().replace(/,/g, "");
	var SUBAMT= $('#'+SUBAMT).val().replace(/,/g, "");
	
	if(MAINAMT=="")
	{
	MAINAMT=0	
	}
	if(SUBAMT=="")
	{
	SUBAMT=0	
	}
	var TOTAL=parseFloat(MAINAMT)-parseFloat(SUBAMT)
	$('#'+TOTALFILED).val(TOTAL)
	  $('#'+TOTALFILED).next().addClass('active');
	  
	TOTALASSCTCREATED();
}


function TOTALASSCTCREATED()
{
	var ASST_GOLD= $('#ASST_GOLD').val().replace(/,/g, "");
	var ASST_POSTALDEP= $('#ASST_POSTALDEP').val().replace(/,/g, "");
	var ASST_MUTUALFUND= $('#ASST_MUTUALFUND').val().replace(/,/g, "");
	var ASST_INSUPOLICY= $('#ASST_INSUPOLICY').val().replace(/,/g, "");
	 
	 var ASST_VEHICLEASSETS= $('#ASST_VEHICLEASSETS').val().replace(/,/g, "");
	 var ASST_HOUSEASSETES= $('#ASST_HOUSEASSETES').val().replace(/,/g, "");
	 var ASST_HOUSRENVASSETES= $('#ASST_HOUSRENVASSETES').val().replace(/,/g, "");
	 
	 if(ASST_GOLD=="")
	{
	ASST_GOLD=0	
	}
	
	if(ASST_POSTALDEP=="")
	{
	ASST_POSTALDEP=0	
	}
	
	if(ASST_MUTUALFUND=="")
	{
	ASST_MUTUALFUND=0	
	}
	
	if(ASST_INSUPOLICY=="")
	{
	ASST_INSUPOLICY=0	
	}
	if(ASST_VEHICLEASSETS=="")
	{
	ASST_VEHICLEASSETS=0	
	}
	
	
	if(ASST_HOUSEASSETES=="")
	{
	ASST_HOUSEASSETES=0	
	}
	
	
	if(ASST_HOUSRENVASSETES=="")
	{
	ASST_HOUSRENVASSETES=0	
	}
	
var TOTAL=parseFloat(ASST_GOLD)+parseFloat(ASST_POSTALDEP)+parseFloat(ASST_MUTUALFUND)+parseFloat(ASST_INSUPOLICY)+parseFloat(ASST_VEHICLEASSETS)+parseFloat(ASST_HOUSEASSETES)+parseFloat(ASST_HOUSRENVASSETES)

var MONTHCONTRI=parseFloat(TOTAL)/36

	MONTHCONTRI=CURINRCommaSep(parseFloat(MONTHCONTRI).toFixed(0));
	TOTAL=CURINRCommaSep(parseFloat(TOTAL).toFixed(0));
	

	$('#ASST_TOTALASSETS').val(TOTAL)
    $('#ASST_TOTALASSETS').next().addClass('active');
	
	$('#ASST_MONTHCONTR').val(MONTHCONTRI)
    $('#ASST_MONTHCONTR').next().addClass('active');
}


function GetTyProperty(){
	var xml=UI_getdata("PROPERTYTYPE","","","","","LSW_SGETFINANCIALVAL");
	
    $("#ASST_TYPEPROPE").html("");
	$("#ASST_TYPEPROPE").append($(xml).find("RESULT").html());
	$("#ASST_TYPEPROPE").material_select(); 
	
	var chknl=UI_getdata($("#PrcsID").val(),$("#ASST_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	var chkfl=($(chknl).find('PRODUCT').text());
	if(chkfl=='T201')
	{
		$(".CHKLNTY").hide()
		
	}
	else
	{
		$(".CHKLNTY").show()
	}
}

$(document).on("blur",".TIMSABB",function(){

var check1=UI_getdata($("#PrcsID").val(),$("#ASST_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
var pro3=($(check1).find('PRODUCT').text());	
var check=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETABBDETAILS");
if(pro3=='T201')
{
var pro=($(check).find ('ADJUSTABB').text());
}
else
{
var pro=($(check).find ('FINALABB').text());
}
var LnAt=0;
LnAt= $("#DMY3").val().split('|')[3].replace(/,/g,'');


if(pro3=='T201')
{
		var pro4=90/100*parseFloat(pro);
}
else if (LnAt<1500000)
{
		var pro4=2*parseFloat(pro);
}
else if(LnAt>1500000)
{
		var pro4=1.25*parseFloat(pro);
}


	pro4=CURINRCommaSep(parseFloat(pro4).toFixed(0));
	$("#ASST_TIMEABB").val(pro4);
	$("#ASST_TIMEABB").next().addClass('active'); 
	
//TWICE OF TRACK RECORD

var twice=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETABBDETAILS");
var twice1=($(twice).find ('EMIPAID').text());
var mulrecrd=2*parseFloat(twice1);

mulrecrd=CURINRCommaSep(parseFloat(mulrecrd).toFixed(0));
$("#ASST_TWICETRACKER").val(mulrecrd);
$("#ASST_TWICETRACKER").next().addClass('active'); 
	
//ADJUST FUND 

var adjust=$("#ASST_MONTHCONTR").val().replace(/,/g,'');
var adjust1=$("#ASST_TIMEABB").val().replace(/,/g,'');
var adjust2=$("#ASST_TWICETRACKER").val().replace(/,/g,'');
/* if(adjust2>8400)
{	
	var finladjust=Math.min((adjust),(adjust1),(adjust2));
}
else
{
	var finladjust=Math.min((adjust),(adjust1));
} */

//var adjust2=$("#ASST_TOTALASSETS").val().replace(/,/g,'');
if(pro3=='T201')
{
	if(adjust2>8400)
	{	
		var finladjust=Math.min((adjust),(adjust1),(adjust2));
	}
	else{
		var finladjust=Math.min((adjust),(adjust1));
	}
}
else
{
	var finladjust=Math.min((adjust),(adjust1),(adjust2));
}
finladjust=CURINRCommaSep(parseFloat(finladjust).toFixed(0));
$("#ASST_ASSTSFUN").val(finladjust);
$("#ASST_ASSTSFUN").next().addClass('active'); 

//EMI PER LAKH


/* 	var LonAt=100000;
	var ROI=0;
	var Tenur=0;
	//LnAt= $("#DMY3").val().split('|')[3];
	ROI=$("#ASST_INTERATE").val();
	Tenur=$("#ASST_PROPOSEDTENU").val();
	if(LonAt=='')
	{
		LonAt=0;
	}
	if(isNaN(LonAt))
	{
		LonAt=0;
	}
	if(ROI=='')
	{
		ROI=0;
	}
	if(isNaN(ROI))
	{
		ROI=0;
	}
	if(Tenur=='')
	{
		Tenur=0;
	}
	if(isNaN(Tenur))
	{
		Tenur=0;
	}
	var amt=0;
	amt=parseFloat(LonAt *((ROI/100)/12) * (Math.pow(1+((ROI/100)/12),Tenur)/((Math.pow(1+((ROI/100)/12),Tenur))-1)));
	$("#ASST_EMI").val(CURINRCommaSep(parseFloat(amt).toFixed(0)));
	$("#ASST_EMI").next().addClass('active');  */
	
	
	var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$("#ASST_INTERATE").val();
	Tenur=$("#ASST_PROPOSEDTENU").val();
	 var result=UI_getdata(ROI,Tenur,LnAmt,"","","LSW_SGETEMI_DATA");
	 var EMI=$(result).find("EMI").text();
	 	if(EMI=='')
	{
		EMI=0;
	}
	if(isNaN(EMI))
		{
			EMI=0;
		}
	$("#ASST_EMI").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#ASST_EMI").next().addClass('active'); 
	
	//LOAN ELIGIBILITY
	
	var ProposedEMI=$("#ASST_ASSTSFUN").val().replace(/,/g,'');
	var EMIPerLakh=$("#ASST_EMI").val().replace(/,/g,'');
	var TyPro=$("#ASST_TYPEPROPE").val();
	var result=UI_getdata("PROTYPE",TyPro,"","","","LSW_SGETFINANCIALVAL");
	var MarginVal=$(result).find("VALUE").text();
	var Proval=$("#ASST_PROPVALUATION").val().replace(/,/g,'');
	if(ProposedEMI=='')
	{
		ProposedEMI=0;
	}
	if(isNaN(ProposedEMI))
	{
		ProposedEMI=0;
	}
	if(EMIPerLakh=='')
	{
		EMIPerLakh=0;
	}
	if(isNaN(EMIPerLakh))
	{
		EMIPerLakh=0;
	}
	if(MarginVal=='')
	{
		
		MarginVal=0;
	}
	if(isNaN(MarginVal))
	{
		MarginVal=0;
	}
	if(Proval=='')
	{
		Proval=0;
	}
	if(isNaN(Proval))
	{
		Proval=0;
	}
	var  amt1=0,amt2=0,amt=0;
	
	/* var chknl=UI_getdata($("#PrcsID").val(),$("#ASST_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	var chkfl=($(chknl).find('PRODUCT').text()); */
	if(pro3=='T201')
	{
		amt=parseFloat(ProposedEMI)/parseFloat(EMIPerLakh)*100000;
		
	}
	else
	{
		amt1=parseFloat(ProposedEMI)/parseFloat(EMIPerLakh)*100000;
		amt2=parseFloat(MarginVal/100)*parseFloat(Proval);		
		amt=Math.min(amt1,amt2);
	}
	
	
	/* amt2=parseFloat(MarginVal/100)*parseFloat(Proval);
	amt1=parseFloat(ProposedEMI)/parseFloat(EMIPerLakh)*100000;
	amt=Math.min(amt1,amt2); */
	$("#ASST_LOANELIGIBIL").val(CURINRCommaSep(parseFloat(amt).toFixed(0)));
	$("#ASST_LOANELIGIBIL").next().addClass('active'); 
	
	//PROPOSED LOAN
	
	var LoanAt=0;
	var fn=0;
	LoanAt= $("#DMY3").val().split('|')[0];
	var fn=Math.min($("#ASST_LOANELIGIBIL").val().replace(/,/g,''),(LoanAt));
	fn=CURINRCommaSep(parseFloat(fn).toFixed(0));
	$("#ASST_PROPOSLOAN").val(fn);
	$("#ASST_PROPOSLOAN").next().addClass('active'); 
	
	//FINAL LTV
	
	var l1=$("#ASST_PROPOSLOAN").val().replace(/,/g,'');
	var l2=$("#ASST_PROPVALUATION").val().replace(/,/g,'');
	if(l1=='')
	{
		l1=0;
	}

	if(l2=='')
	{
		l2=0;
	}
	
		
	var l3=parseFloat(l1)/parseFloat(l2)*100;
	if(isNaN(l3))
	{
		l3=0;
	}
	l3=CURINRCommaSep(parseFloat(l3).toFixed(0));
	$("#ASST_FINALLTV").val(l3);
	$("#ASST_FINALLTV").next().addClass('active');
	
	
})


function DocFldUpldHndlr(id,docu,KYCName,UploadView)
{

var Val=$(id).val()


if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain= LoadFrmXML("RS001");
    var usrpwd= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("PrcsID");
    var FormName= 'Property';
    var CusID=$('#LPDT_PROPERTYNO').val()
    var DocName=KYCName
    var names="";
    var descrptns="";
	//var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
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
   //  var FileType= $(id).closest('td').find('input[type="file"]')[0].files[0].name.split('.')[1];
  //   var Filename  = names.replace(',','')
          var Filename  = $(id).closest('td').find('input[type="file"]')[0].files[0].name
	      var FileType= Filename.substring(Filename.lastIndexOf('.')+1);
          var  Filename= Filename.substring(0, Filename.lastIndexOf('.'));
          var names=Filename
       
	     if($("#COBI_CUSTYPE").val()=='Individual')
	   {
		  var ADDRTYPE = "ADDRESSPROOF"
	   }
	   else
	   {
		var ADDRTYPE = "Others"   
		   
	   }
		/*var xml=UI_getdata(FileType,FileSize,Filename,ADDRTYPE,$("#COBI_CUSTYPE").val()+'|'+$("#PrcsID").val(),"LSW_SGETKYCDOCUMNTTYPE")
		var FileAccept=$(xml).find('RESULT').text()
		
		
	if(FileAccept == 'No')
	{
		alert($(xml).find("alert").text());
		$(id).closest('td').find('input[type="file"]').val('')
		return
    } */
names=names+'.'+FileType
var y=  names;
/*  var specialChars = "<>&#^|~`"
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
				$('.'+UploadView).show();
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


