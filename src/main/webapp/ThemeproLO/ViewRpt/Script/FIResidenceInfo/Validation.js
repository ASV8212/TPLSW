
function  GridEnableControl(popTableModPageGrid1)
{
	popTableModPageGrid1.MakeCellsEditable({
           // "onUpdate": myCallbackFunction,
            "inputCss":'my-input-class',
            "columns": [1,2],
            /*"allowNulls": {
                "columns": [1],
                "errorClass": 'error'
            },*/
            "confirmationButton": { 
                "confirmCss": 'my-confirm-class',
                "cancelCss": 'my-cancel-class'
            },
    		"inputTypes": [
                
                {
                    /*"column":1, 
                    "type": "list",
                    "options":[
                        { "value": "PAN", "display": "PAN" },
                        { "value": "Voter ID", "display": "Voter ID" },
                        { "value": "Driving License", "display": "Driving License" },
                        { "value": "Aadhar", "display": "Aadhar" },
                        { "value": "Passport", "display": "Passport" },
                        { "value": "Electricity Bill", "display": "Electricity Bill" },
                        { "value": "Utility Bill", "display": "Utility Bill" }
                    ]*/
                	 "column":1, 
                     "type": "radio",
                     "options":[
                         { "value": "Yes", "display": "NAGATIVEYES","name":"NAGATIVESTATUS" },
                         { "value": "No", "display": "NAGATIVENO","name":"NAGATIVESTATUS" },
                    
                     ]
                },
                {
                    "column":2, 
                    "type": "text",
                    "options":{ }
                },
                /*{
                    "column": 6,
                    "type": "datepicker", // requires jQuery UI: http://http://jqueryui.com/download/
                    "options": {
                        "icon": "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" // Optional
                    }
                }*/
    			
            ]
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

function RCUPage()
{
if($("#RCUI_INITIDATED").val()=='Yes')
{
  $(".INITIATEPAGE").show();
  $(".INITIATE").hide();
}
else
{
  $(".INITIATEPAGE").hide();
  $(".INITIATE").show();
}
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

// TV1 Script End



function OtherLocat()
{
	var Location=$("#FIAD_LOCATIONASST").val()
	if(Location=="Others")
		{
		$("#FIAD_OTHERLOCAT").addClass('FIADMndtry');
		 $("#FIAD_OTHERLOCAT").next().find(".MndtryAstr").html("*");
       }
	else
		{
		$("#FIAD_OTHERLOCAT").removeClass('FIADMndtry');
		 $("#FIAD_OTHERLOCAT").next().find(".MndtryAstr").html("");
         }
}

function NOTenants()
{
	var Tenants=$("#FIAD_TYPERESIDENCE").val()
	if(Tenants=="Multi tenant house")
		{
		$("#FIAD_NOTENENTS").addClass('FIADMndtry');
		 $("#FIAD_NOTENENTS").next().find(".MndtryAstr").html("*");
       }
	else
		{
		$("#FIAD_NOTENENTS").removeClass('FIADMndtry');
		 $("#FIAD_NOTENENTS").next().find(".MndtryAstr").html("");
         }

}

function RecommReason()
{
	var Recomm=$("input[name='FIAD_RECOMMENDED']:checked"). val();
	
	if(Recomm=="No")
		{
		$("#FIAD_REASONS").addClass('FIADMndtry');
		 $("#FIAD_REASONS").parent().next().find(".MndtryAstr").html("*");
		}
	else 
		{
		$("#FIAD_REASONS").removeClass('FIADMndtry');
		 $("#FIAD_REASONS").parent().next().find(".MndtryAstr").html("");
		}
}

function CheckFincTWOWheeler()
{
	var LONTYPE=$("#FIAD_VEHISTAGEFINA").val()
	if(LONTYPE=="Financed")
	{
		$(".FINTWO").attr("disabled",false)
	}
	else
	{
		$(".FINTWO").attr("disabled",true)
	}
}
	 
function CheckFincCAR()
{
	var LONTYPE=$("#FIAD_VEHISTAGEPERSON").val()
	if(LONTYPE=="Financed")
	{
		$(".FINCAR").attr("disabled",false)
	}
	else
	{
		$(".FINCAR").attr("disabled",true)
	}
}

function Time()
{	
var TIME=$("#FIAD_TIMEVISIT").val()
var TIME1 = TIME.substring(0,2);
var MINTUS = TIME.substring(3,5);
var AMPM = TIME.substring(5,7);
    AMPM= AMPM.toUpperCase()
if(TIME1>12||MINTUS>59)
{
alert('Time Invalid Format')
$("#FIAD_TIMEVISIT").val('');
}
    
else if(AMPM!="AM")
{
	if(AMPM!="PM")
		{
		alert('Time Invalid Format')
		$("#FIAD_TIMEVISIT").val('');
        }
	else
	{
	$("#FIAD_TIMEVISIT").val($("#FIAD_TIMEVISIT").val().toUpperCase());
    }
	
 }
else
	{
	$("#FIAD_TIMEVISIT").val($("#FIAD_TIMEVISIT").val().toUpperCase());
    }
}	

function getInterior()
{
	var k=	$("#FIAD_INTERERRESID").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#FIAD_INTERERRESID").val()[i]
     //var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1
	      //var CUSText1= CUSText1+','+CUSTEXT
      }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       //var CUSText1=CUSText1.replace(',','')
       $("#FIAD_INTERERRESIDI").val(CUSTOMERNAMES)
      // $("#APDD_PDDONEBYNAME").val(CUSText1)
}
	
function getExterior()
{
	var k=	$("#FIAD_EXTERCOMMM").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#FIAD_EXTERCOMMM").val()[i]
     //var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1
	      //var CUSText1= CUSText1+','+CUSTEXT
      }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       //var CUSText1=CUSText1.replace(',','')
       $("#FIAD_EXTERCOMMMI").val(CUSTOMERNAMES)
      // $("#APDD_PDDONEBYNAME").val(CUSText1)
}

function getAssets()
{
	var k=	$("#FIAD_ASSTSEENRESID").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#FIAD_ASSTSEENRESID").val()[i]
     //var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1
	      //var CUSText1= CUSText1+','+CUSTEXT
      }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       //var CUSText1=CUSText1.replace(',','')
       $("#FIAD_ASSTSEENRESIDI").val(CUSTOMERNAMES)
      // $("#APDD_PDDONEBYNAME").val(CUSText1)
}

function getReasons()
{
	var k=	$("#FIAD_REASONS").val().length	
var CUSTOMERNAMES=""
	var CUSText1=""
 for(i=0;i<k;i++)
	 {
	 var CUSTOMERNAMES1=$("#FIAD_REASONS").val()[i]
     //var CUSTEXT =$($("#APDD_PDDONEBY").find('active').prevObject["0"].selectedOptions).find('option').prevObject[i].text
		
	 if(CUSTOMERNAMES1!=undefined)
		 {
	      var CUSTOMERNAMES= CUSTOMERNAMES+','+CUSTOMERNAMES1
	      //var CUSText1= CUSText1+','+CUSTEXT
      }
	 }
       var CUSTOMERNAMES =CUSTOMERNAMES.replace(',','')
       //var CUSText1=CUSText1.replace(',','')
       $("#FIAD_REASONSI").val(CUSTOMERNAMES)
      // $("#APDD_PDDONEBYNAME").val(CUSText1)
}



function AgeCompare(XID,YID,alert1)
{
     var TotalYears=$("#"+XID).val()
	 var CurrentYear=$("#"+YID).val()
if(TotalYears!='')
{
if(CurrentYear!='')	
{
	if(parseInt(CurrentYear)>parseInt(TotalYears))
	 {
	 alert (alert1)
	 $("#"+YID).val('');
	 $("#"+YID).next().removeClass('active');
     }
}
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
    	 window.alert('Date of Visit should be greater than date initiation');
    	 XID.value="";
    	 XID.nextElementSibling.classList.remove('active');
    	}
}
}
}
