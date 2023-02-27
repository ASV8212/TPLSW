
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
	var xml=UI_getdata("","","","","","LSW_SGETFIANCIYEARS")

    $("#FELD_LSTMONYRBOUNCED"+row).html("")
	$("#FELD_LSTMONYRBOUNCED"+row).append($(xml).find("Years").html());
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
        }
      }

}





function CHECKBOUNCEDDT(Month,Years,ACCOUNTDT)
{
	if($("#"+ACCOUNTDT).val()=='')
	{
		alert('Kindly choose the EMI beginning date');
		$("#"+Years).val('');	
        $("#"+Years).material_select();
		
		
	}
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

        function CACLYEAR(HTML,NAME) {

    //var html=$('.BankDetail1').find(".DYNROW")
    var row = $('.BankDetail1').find(".DYNROW").length;
	row=row+1
     var EMIYEAR = $("#"+HTML+row).val();
	  var EMIBOUNCE = $("#"+NAME+row).val();
	  
	  date = new Date();
	    var y = date.getFullYear();
	    var EMIYEAR1 = EMIYEAR.split("/");
	    var dd = EMIYEAR1[0];
	    var mm = EMIYEAR1[1];
	    var yy = EMIYEAR1[2];

	var EMIYEAR2=yy

	    var EMIBOUNC1 = EMIBOUNCE.split("/");
	     var dd1 = EMIBOUNC1[0];
	     var mm1 = EMIBOUNC1[1];
	     var yy1 = EMIBOUNC1[2];
     var EMIBOUNC2=yy1
	 
	 if(EMIYEAR2>EMIBOUNC1)
	    	{
	    	 window.alert('EMI start should not be less than  EMI bounce year');
	    	 $("#"+NAME+row).val('')
			 $("#"+NAME+row).material_select();
			
 			 
			 
	    	}
	  
	 
	}

  /* function CACLYEAR (XID,YID)
   {
     	
	    var STDATE=$("#"+XID).val()
	    var ENDDATE=$("#"+YID).val()


	  
	  
   }*/
	   function Checkemidate(Evnt)
	   {
		   var emidate=$(Evnt).val();
		   if(emidate=='')
		   {
			   alert('Kindly fill the EMI Beginning Date');
		   }
	   }
	   
function UTILIZATION()
{

var DATA=["ExistingLoan1|"];
    for (j=0;j<DATA.length;j++)
 	 {
	  var ValuationID=DATA[j].split("|")[0];
      var row = $("." + ValuationID).find(".DYNROW").length;
        for (i=0;i<row;i++)
        {
            var HTML =	 $("." + ValuationID).find(".DYNROW")[i];
var loantype = $(HTML).find("[name='FELD_EXLONTYP']").val();
if(loantype=="OverDraft/cash credit")
{
$(HTML).find(".LOANTYPE").hide()
$(HTML).find(".UTILIZAMT").show()
}
else
{
$(HTML).find(".LOANTYPE").show()
$(HTML).find(".UTILIZAMT").hide()
}
}
}
}   
	  // "Checkemidate('FELD_EMIBEGNDAT'+$(this).closest('.DYNROW').attr('data-row'));