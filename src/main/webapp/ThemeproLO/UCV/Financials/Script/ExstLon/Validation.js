
function DocFldUpldHndlr(id,docu,KYCName)
{	
var Val=$(id).val()

if($(id).closest('td').find('input[type="file"]').val()!="")
{
    var domain= LoadFrmXML("RS001");
    var usrpwd= LoadFrmXML("RS002");
    var PrcsID=getUrlParam("PrcsID");
    var FormName= 'KYC';
    var CusID=$('#CBSI_CUSID').val()
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
	    	url:"/TPLSW/FileUploadHandler?names="+names+"&PrcsID="+PrcsID+"&FormName="+FormName+"&descrptns="+descrptns+"&flsize="+flsize+"&vrsnno="+vrsnno+"&domain="+domain+"&usrpwd="+usrpwd+"&Prvnt="+$("#Prvnt").val()+"&CusID="+CusID+"&DocName="+DocName,
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


/*function CALCULATEMOB(XID,YID)
{

  if($("#"+XID).val()!='')	
    {	
	var STDATE=$("#"+XID).val()
	var today = new Date();
var dddd = String(today.getDate()).padStart(2, '0');
var mmmm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();


	      date = new Date();
	    var y = date.getFullYear();
	    var STDATE1 = STDATE.split("/");
	    var dd = STDATE1[0];
	    var mm = STDATE1[1];
	    var yy = STDATE1[2];

	    
//	var STDATE2=yy+mm+dd
        
	    
	  /*   var today = today.split("/");
	     var dd1 = today[0];
	     var mm1 = today[1];
	     var yy1 = today[2];*/
	     
	/*var numberOfMonths = (yyyy - yy) * 12 + (mmmm - mm);
	 $("#"+YID).val(numberOfMonths)
	 $("#"+YID).next().addClass('active');
   }
}*/

function CALCULATEMOB(XID,YID,STATUS,CLSDT)
{

	if($("#"+XID).val()!='')	
    {	
	var STDATE=$("#"+XID).val()
	var STDATE1 = STDATE.split("/");
	var dd = STDATE1[0];
	var mm = STDATE1[1];
	var yy = STDATE1[2];
	var start = new Date(yy+'-'+mm+'-'+dd);
	var end1 ;
	if($("#"+STATUS).val()=="Active"||$("#"+STATUS).val()=="Duplicate"||$("#"+STATUS).val()=="")
		{
		var CLSDT2 = $("#DMY7").val().split('|')[1].split("/");
		var ddzz = CLSDT2[0];
		var mmzz= CLSDT2[1];
		var yyzz = CLSDT2[2];
		
		end1= new Date(yyzz+'-'+mmzz+'-'+ddzz);
		}
	else if($("#"+STATUS).val()=="Closed" && $("#"+CLSDT).val()!="")
		{
		var CLSDT=$("#"+CLSDT).val()
		var CLSDT1 = CLSDT.split("/");
		var ddz = CLSDT1[0];
		var mmz= CLSDT1[1];
		var yyz = CLSDT1[2];
		end1 = new Date(yyz+'-'+mmz+'-'+ddz);
		}
	else if($("#"+STATUS).val()=="Closed" && $("#"+CLSDT).val()=="")
		{
		$("#"+YID).val('')
		 $("#"+YID).next().removeClass('active');
	//	alert("Choose Closed Date")
		return false;
		}
	var end = end1;
	if(end<start)
		{
		$("#"+YID).val('')
		 $("#"+YID).next().removeClass('active');
		alert("Invalid date choosen")
		return false;
		}
	var days = (end- start) / (1000 * 60 * 60 * 24);
	
	var numberOfMonths=Math.ceil(days/30)
	
	$("#"+YID).val(numberOfMonths)
	 $("#"+YID).next().addClass('active');
	 
	 
	 
	 
	 
	/*var STDATE=$("#"+XID).val()
	//var end1  = $("#DMY7").val().split('|')[2];
	
	var end1  = new Date();

	var STDATE1 = STDATE.split("/");
	var dd = STDATE1[0];
	var mm = STDATE1[1];
	var yy = STDATE1[2];
	
	/*var ENDDATE1 = end1.split("/");
	var Edd = ENDDATE1[0];
	var Emm = ENDDATE1[1];
	var Eyy = ENDDATE1[2];*/
	
	/*var Edd = end1.getDate();
	var Emm =  end1.getMonth() + 1
	var Eyy =  end1.getFullYear()
	mm = parseInt(mm)-1
	if(parseInt(mm)<10){
			mm="0"+mm
		}
		if(mm=="00"){
			mm=12;
			yy=yy-1;
		}
	var start = new Date(yy+'-'+mm+'-'+dd);
	if(parseInt(Edd)>parseInt(dd)){
	var end = new Date(Eyy+'-'+Emm+'-'+dd);
	}
	else{
		Emm = parseInt(Emm)-1
		if(parseInt(Emm)<10){
			Emm="0"+Emm
		}
		if(Emm=="00"){
			Emm=12;
			Eyy=Eyy-1;
		}
		var end = new Date(Eyy+'-'+Emm+'-'+dd);
	}
	
	var days = (end- start) / (1000 * 60 * 60 * 24);
	
	var numberOfMonths=Math.floor(days/30)

	    
//	var STDATE2=yy+mm+dd
        
	    
	  /*   var today = today.split("/");
	     var dd1 = today[0];
	     var mm1 = today[1];
	     var yy1 = today[2];*/
	     
	//var numberOfMonths = (yyyy - yy) * 12 + (mmmm - mm);
	 /*$("#"+YID).val(numberOfMonths)
	 $("#"+YID).next().addClass('active');*/
	 
   }
}

function GetFinancialYears(row)
{	
	row=row+1
	var years=$("#FELD_LSTMONYRBOUNCED"+row).val()
	

    $("#FELD_LSTMONYRBOUNCED"+row).html("")
	$("#FELD_LSTMONYRBOUNCED"+row).append($(xml_Finc).find("Years").html());
	$("#FELD_LSTMONYRBOUNCED"+row).material_select();	
	$("#FELD_LSTMONYRBOUNCED"+row).val(years);
	$("#FELD_LSTMONYRBOUNCED"+row).material_select();
}

function ChangeMonth(Month,Years)
{
var month1= $("#"+Month).val()
var years1= $("#"+Years).val()
var MonCou = "";
if(month1!="")
{
if(years1!="")
	{
var monthCount=new Date().getMonth()
var CurrentYear=new Date().getFullYear() 
if(CurrentYear==years1)
	{
if(month1=="January")
	{
	MonCou='0'
	}
else if(month1=="February")
	{
	MonCou='1'
	}
else if(month1=="March")
{
MonCou='2'
}
else if(month1=="April")
{
MonCou='3'
}
else if(month1=="May")
{
MonCou='4'
}
else if(month1=="June")
{
MonCou='5'
}
else if(month1=="July")
{
MonCou='6'
}
else if(month1=="August")
{
MonCou='7'
}
else if(month1=="September")
{
MonCou='8'
}
else if(month1=="October")
{
MonCou='19'
}
else if(month1=="November")
{
MonCou='10'
}
else if(month1=="December")
{
MonCou='11'
}
}

if(parseInt(monthCount)< parseInt(MonCou))
	{
	
	alert("Future Date Not Allowed")
    $("#"+Month).val('')
	$("#"+Month).material_select();
	$("#"+Years).val('')
	$("#"+Years).material_select();
	}

}
}
}


function CHKEMIAMT(EMI,POS,RECOL)
{
var EMI= $("#"+EMI).val()
var POS= $("#"+POS).val()
var EMI = EMI.replace(/,/g, "")
var POS = POS.replace(/,/g, "")

if(EMI!="")
{
if(POS!="")
{

if(parseInt(POS)< parseInt(EMI))
	{
	
	alert("EMI Amount should not be greater than POS")
         $("#"+RECOL).val('')
         $("#"+RECOL).next().removeClass('active')
	  }

}
}
}

function CHKLOANSTATUS()
{
	var DATA=["ExistingLoan1|"];
    for (j=0;j<DATA.length;j++)
 	 {
	  var ValuationID=DATA[j].split("|")[0];
      var row = $("." + ValuationID).find(".DYNROW").length;
        for (i=0;i<row;i++)
        {
            var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
           
         var Status = $(HTML).find("[name='FELD_LONSTATUS']").val();
           if(Status=="Closed")
        	   {
                $(HTML).find(".LONACT").show()
                $(HTML).find(".LONACTMND").addClass('FELDMndtry')
               }
           else
        	   {
        	   $(HTML).find("[name='FELD_CLOSEDATE']").val('')
        	   $(HTML).find("[name='FELD_CLOSEDATE']").val('')
        	   $(HTML).find("[name='FELD_MULTIPLIER']").prop('checked', false);
               $(HTML).find(".LONACT").hide()
        	    $(HTML).find(".LONACTMND").removeClass('FELDMndtry')
               }
        }
      }

}



function CHKNOBOUNCE()
{
	var DATA=["ExistingLoan1|"];
    for (j=0;j<DATA.length;j++)
 	 {
	  var ValuationID=DATA[j].split("|")[0];
      var row = $("." + ValuationID).find(".DYNROW").length;
        for (i=0;i<row;i++)
        {
            var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
           
         var Bounce = $(HTML).find("[name='FELD_NUMOFBOUNCE']").val();
           if(parseInt(Bounce)>0)
        	   {
                $(HTML).find(".BONMNTRY").addClass('FELDMndtry')
                $(HTML).find(".BONMNTRY").next().find(".MndtryAstr").html("*");
                
               }
           else
        	   {
        	   $(HTML).find(".BONMNTRY").removeClass('FELDMndtry')
        	   $(HTML).find(".BONMNTRY").next().find(".MndtryAstr").html("");
			   $(HTML).find("[name='FELD_LSTMONBOUNCED']").val('')
        	   $(HTML).find("[name='FELD_LSTMONBOUNCED']").material_select("destroy");	
        	   $(HTML).find("[name='FELD_LSTMONBOUNCED']").material_select();
			   $(HTML).find("[name='FELD_LSTMONYRBOUNCED']").val('')
        	   $(HTML).find("[name='FELD_LSTMONYRBOUNCED']").material_select("destroy");	
        	   $(HTML).find("[name='FELD_LSTMONYRBOUNCED']").material_select();
               }
        }
      }

}


function CHKNOBOUNCEONLOAD()
{
	var DATA=["ExistingLoan1|"];
    for (j=0;j<DATA.length;j++)
 	 {
	  var ValuationID=DATA[j].split("|")[0];
      var row = $("." + ValuationID).find(".DYNROW").length;
        for (i=0;i<row;i++)
        {
            var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
           
         var Bounce = $(HTML).find("[name='FELD_NUMOFBOUNCE']").val();
           if(parseInt(Bounce)>0)
        	   {
                $(HTML).find(".BONMNTRY").addClass('FELDMndtry')
                $(HTML).find(".BONMNTRY").next().find(".MndtryAstr").html("*");
                }
           else
        	   {
        	   $(HTML).find(".BONMNTRY").removeClass('FELDMndtry')
        	   $(HTML).find(".BONMNTRY").next().find(".MndtryAstr").html("");
               }
			   
			   if($(HTML).find("input[name=FELD_OURINS]").is(':checked')==true) 
			   {
                 $(HTML).find("input[name=FELD_INSINAME]").attr("disabled",true);
			   }
		       else
		       {
                 $(HTML).find("input[name=FELD_INSINAME]").attr("disabled",false);
		       }			
        }
      }
}

function CheckInsitute(OurIns,Name){
	
	if($('#'+OurIns).is(':checked')==true)
	{
       	
		$("#"+Name).val($(xml_Ins).find("Result").text());
		$("#"+Name).next().addClass('active');
		$("#"+Name).attr("disabled",true);
	}
	else
	{
		$("#"+Name).val('');
		$("#"+Name).next().removeClass('active');
		$("#"+Name).attr("disabled",false);
	}
}


$(document).on("click", ".RTRDetl" , function() {
	

	var html=$(this).closest('.DYNROW')
	var Row= $(this).closest('.DYNROW').attr('data-row');
    

	if($("#FELD_EXLONNO"+Row).val()=="")
	{
	  if($(html).find("[name=FELD_EXLONNO]").val() == "")
	  {
	     var CUSID = UI_getdata("EXLON","","Yes","","","Sam_sGetSeqID");	
	     $(html).find("[name=FELD_EXLONNO]").val($(CUSID).find("Val1").text());
		 
	  }
	}
	if($("#FELD_INSINAME"+Row).val()!="")
	{
		$(html).find("[name=ERTR_FINNAME]").val($("#FELD_INSINAME"+Row).val())
		$(html).find("[name=ERTR_FINNAME]").next().addClass('active');
	}
		if($("#FELD_LONAMT"+Row).val()!="")
	{
		$(html).find("[name=ERTR_FINAMT]").val($("#FELD_LONAMT"+Row).val())
		$(html).find("[name=ERTR_FINAMT]").next().addClass('active');
	}
	$(html).find("[name=ERTR_CLINTNAME]").val($(".FormPageMultiTab li.active").text());
	$(html).find("[name=ERTR_CLINTNAME]").next().addClass('active');
   var Cusid=$(html).find("[name=FELD_CUSID]").val();
   var ExNo=$(html).find("[name=FELD_EXLONNO]").val();
	
	$(html).find("[name=ERTR_EXISLONNO]").val(ExNo);
	$(html).find("[name=ERTR_CUSID]").val(Cusid);
	$(html).find("[name=ERTR_PRCSID]").val($("#PrcsID").val());
});



function CHECKBOUNCEDDT(Month,Years,ACCOUNTDT)
{
var month1= $("#"+Month).val()
var years1= $("#"+Years).val()
var MonCou = "";
if(month1!="")
{
if(years1!="")
	{

 if(month1=="January")
{
MonCou='01'
}
else if(month1=="February")
{
MonCou='02'
}

else if(month1=="March")
{
MonCou='03'
}
else if(month1=="April")
{
MonCou='04'
}
else if(month1=="May")
{
MonCou='05'
}
else if(month1=="June")
{
MonCou='06'
}
else if(month1=="July")
{
MonCou='07'
}
else if(month1=="August")
{
MonCou='08'
}
else if(month1=="September")
{
MonCou='09'
}
else if(month1=="October")
{
MonCou='10'
}
else if(month1=="November")
{
MonCou='11'
}
else if(month1=="December")
{
MonCou='12'
}
}
var BOUNCEDT=years1+MonCou
var ACCDT=$("#"+ACCOUNTDT).val().split("/")
var ACCDT =(ACCDT[2])+(ACCDT[1])

if(parseInt(BOUNCEDT)<parseInt(ACCDT))
{
alert ('Bounce years is lesser  than EMI beginning Date')
$("#"+Month).val('')
$("#"+Years).val('')

$("#"+Month).material_select("destroy");	
$("#"+Month).material_select();
$("#"+Years).material_select("destroy");	
$("#"+Years).material_select();
}


}
}
function FormatEXCELDocDwnld(id)
{

var IOP=LoadFrmXML("RS006");
var RedirectURL="";
var url= $("#DMY1").val()
var Name='RTR'
var param2="RTRFORMAT";

RedirectURL=window.location.origin+"/TPLSW/MultiShtExcelDwnld?param1=RTR&param2="+param2+"&param3=&param4=&param5=&param6=&param7=&param8=&FName="+Name+"&FExtsn=xlsx&spname=LSW_SGETEXCELDATA";
$("#DocView").attr("src", RedirectURL);
    	
}
function UploadData(id,ROW)
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
 	file_data = $('input[type="file"]')[ROW-1].files;
 	  fd.append("file_"+"1", file_data[0]);
 	  
 	  var name=file_data[0].name.split('.')[0];
 	  var op= UI_getdata("DOCVRNO","","","","","Sam_sGetCOMSeqID")
	  //$("#PrcsID").attr('value',$(op).find("VR").text())
 	var   param1=$(op).find("VR").text();
 	var   param2="LSW_SEXCELMULTIUPLOADDATA";
 	var   param3="LSW_TRTREXCELDETLS";
 	
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
				var VALIDATIONCHK=UI_getdata($(op).find("VR").text(),$('#PrcsID').val(),$('#ERTR_CUSID').val(),$('#ERTR_EXISLONNO').val(),"","LSW_SRTREXCL")
			   var BulkInsertRST=$(VALIDATIONCHK).find('RESULT').text();
			if($(VALIDATIONCHK).find('RESULT').text()=="SUCCESS")
			{
						if($("#FELD_EXLONNO"+ROW).val()=="")
						{
							var CUSID = UI_getdata("EXLON","","Yes","","","Sam_sGetSeqID");
							 $("#FELD_EXLONNO"+ROW).val($(CUSID).find("Val1").text());
							 
						//	$(".BKDT_BNKNO").text($(CUSID).find("Val1").text());
						}
			    FncallDocChkLst(this,'RTRTable'+ROW,{spname:'LSW_SRTRGRD',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$(op).find("VR").text(),brid:$('#PrcsID').val(),MnuId:$('#FELD_CUSID').val()+'|'+$('#FELD_EXLONNO'+ROW).val()},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||6,7','RTRGRD');
				var dELY=0;
				var DELYMAX=0;
				var DELYAVG=0;
				for(var j=0;j<$("#RTRTable"+ROW).find(".tbodytr").length;j++)
					{
						
						 dELY=dELY+parseFloat($($("#RTRTable"+ROW).find(".tbodytr")[j]).find(".DELAY").val().replace(/,/g,''));
						 if(DELYMAX<parseFloat($($("#RTRTable"+ROW).find(".tbodytr")[j]).find(".DELAY").val().replace(/,/g,'')))
						 {
							 DELYMAX=parseFloat($($("#RTRTable"+ROW).find(".tbodytr")[j]).find(".DELAY").val().replace(/,/g,''));
						 }
						
					}
					var finl=CURINRCommaSep(parseFloat(dELY).toFixed(0));
					$("#ERTR_TOTDELAY"+ROW).val(finl);
					$("#ERTR_TOTDELAY"+ROW).next().addClass('active');
					
					var maxfinl=CURINRCommaSep(parseFloat(DELYMAX).toFixed(0));
					$("#ERTR_PEAKDLY"+ROW).val(maxfinl);
					$("#ERTR_PEAKDLY"+ROW).next().addClass('active');
					
					DELYAVG=parseFloat(dELY)/parseFloat($("#RTRTable"+ROW).find(".tbodytr").length)
					
					var avgfinl=CURINRCommaSep(parseFloat(DELYAVG).toFixed(0));
					$("#ERTR_AVGDLY"+ROW).val(avgfinl);
					$("#ERTR_AVGDLY"+ROW).next().addClass('active');
			
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
					var Alert2 = Alert2 +'\r\n'+Alert1
					var Alert1= nameArr[i]
				 }
				   alert('Complete the below Mandatory actionables \r\n'+Alert2)
				   return false;
				}
 				}
 	  
 	        }
		}
 	    });
}
function Subemi(ROW)
{
	var Tolnoemi=$("#ERTR_TOTEMI"+ROW).val()
	var Paiddue=$("#ERTR_PAIDDUE"+ROW).val()
	var Sub=parseFloat(Tolnoemi)-parseFloat(Paiddue)
		if (isNaN(Sub)) 
	{
		Sub = 0
	}
	var Finsub=CURINRCommaSep(parseFloat(Sub).toFixed(0));

	$("#ERTR_BALTENURE"+ROW).val(Finsub);
	$("#ERTR_BALTENURE"+ROW).next().addClass('active');
}

function GridControlDetailRTRGRD(popTableModPageGrid1,TableID,dtData,dtcolumn,hideClm)
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
	   
	   
		{ targets: 5, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="RTRG_DelayDays'+rowno+'" name="RTRG_DelayDays'+rowno+'"  data-total="RTRG_DelayDays" maxlength="15" disabled class="form-control NoSpecialChar DELAY DSVLBL IsCURCommaFields RTRGDBfields form-control ">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=RTRG_DelayDays'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=RTRG_DelayDays'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
									
						         } 
								 },
								 
 { targets: 7, "render": function ( data, type, row, meta ) {                            
					 			
							 var rowno = meta.row;	 
								var HTML =	'<span><input type="text" id="RTRG_UNIQUEID'+rowno+'" name="RTRG_UNIQUEID'+rowno+'"  data-total="RTRG_UNIQUEID" maxlength="15" class="form-control NoSpecialChar RTRGDBfields form-control ">';			 
								HTML = HTML + '</span>'; 
									 
								var htmldata = $(HTML);
									
								if ($(htmldata).find('[name=RTRG_UNIQUEID'+rowno+']').hasClass("IsCURCommaFields"))
									{
									data = CURCommaSep(data);
									}
									$(htmldata).find('[name=RTRG_UNIQUEID'+rowno+']').attr("value",data);
									return htmldata[0].outerHTML;   		
									
						         } 
								 }
		 
		 
    	   ],

         "fnDrawCallback": function (oSettings) {

        }

        });
}


 
/* $(document).on("click", ".DELAY" , function() {
	var a=0;
		
		for(var j=0;j<$("#RTRTable1").find(".tbodytr").length;j++)
		{
			var a=a+parseFloat($($("#RTRTable")+$(this).closest('.DYNROW').attr('data-row').find(".tbodytr")[j]).find(".DELAY").val());
		}
		var finl=CURINRCommaSep(parseFloat(a).toFixed(0));
		 $("#ERTR_TOTDELAY").val(finl);
	 $("#ERTR_TOTDELAY").next().addClass('active');

});  */
