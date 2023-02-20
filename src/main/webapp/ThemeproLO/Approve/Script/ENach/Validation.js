function AccntOnChng(){
	var op = UI_getdata($("#PrcsID").val(),$("#AEND_ACCNTNO").val(),"","","","LSW_SGETACCNTNO1");
	$("#AEND_BANKNAME").val($($(op).find("BNKNAME")[0]).text());
	$('#AEND_BANKNAME').next().addClass('active');
	$("#AEND_ACCNTHLDRNAME").val($(op).find("HOLDERNAME").text())
	$("#AEND_ACCNTHLDRNAME").next().addClass('active')
}

function GentrateENACH()
{
	var IOP=window.location.origin;
	var PrcsId=$("#PrcsID").val()
	var AcctNo=$("#AEND_ACCNTNO").val()
    ajaxindicatorstart("Downloading.. Please wait");
	
	var flname = IOP+LoadFrmXML("RT086")+"&__format=pdf&Param1="+PrcsId+"&Param2="+AcctNo;
	
	var link=document.createElement('a');
		document.body.appendChild(link);
		link.download=flname;
			link.href=flname;
			link.click();
			ajaxindicatorstop();
}

function ChkENACH(Verify,uniqid,urmno,Status)
{
	if($("#"+Verify).val()=="Success")
	{
		 var PRCSID = $("#PrcsID").val();
	            $.ajax({
	              url: "/TPLSW/ENACHFETCH",
	              type: 'POST',
	              data: {PRCSID:PRCSID,UID:$("#DMY7").val().split('|')[11],Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	              async:false,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	           success: function(stm){
			if(stm == "")
	    		{
					//alert('E-NACH Failed')
					//return false;
				}
             else if (stm.split("|")[0]=="FAILURE" || stm.split("|")[0]=="No Data")
	    		{
                  //alert(stm.split("|")[3])
				  //return false;
				}
				else if (stm.split("|")[0]=="SUCCESS")
	    		{
					if(stm.split("|")[2]!="")
					{
				      $("#AEND_ENACHURMNO").val(stm.split("|")[2])
					  $("#Save1").click();
                    alert(stm.split("|")[3])
					}
					else
					{
					  //alert(stm.split("|")[3])	
					}
				}				   
			   },
	             error: function(stm) {
		              //window.alert(LoadFrmXML("V0125"))
		                // alert("E-NACH Failed.");
						 //	return false;
		                   }
	               });
		  if($("#AEND_ENACHURMNO").val()=="")
		  {
            if (confirm("Do you want to initiate the enach process?") == true) {	
	var PRCSID = $("#PrcsID").val();
	 $("#Save1").click();
	$.ajax({
	    url: "/TPLSW/ENACH",
	    type: 'POST',
	    data: {PRCSID:PRCSID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	    async:true,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	    success: function(stm){        
	   // var obj = JSON.parse(JSON.stringify(stm))
	   var OP=stm.split('|')[3]
	    	if (stm == "")
	    		{
	    		   alert("E-NACH Failed");
	    		   $("[data-Validatedata="+Verify+"]").text('E-NACH Failed');
	    		   $("[data-Validatedata="+Verify+"]").removeClass("btn-GrnInplain");	
	    		   $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		   $("[data-Validatedata="+Verify+"]").addClass("btn-RedInplain"); 
	    		   $("#"+Verify).val('Failed')
	    		     return;
	    		}
				else if (stm.split("|")[0]=="SUCCESS" && stm.split("|")[2] != "")
	    		{
				  $("[data-Validatedata="+Verify+"]").text('Re-Initiate E-NACH');
	    		  $("[data-Validatedata="+Verify+"]").addClass("btn-GrnInplain");	
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-RedInplain"); 
	    		  //$("#"+Verify).val('Success')
				  $("#"+uniqid).val(OP.split('*')[2])
				  $("#"+Status).val(OP.split('*')[1])
				  $("#"+Verify).val(OP.split('*')[0])
				}
				else
				{
				  alert(stm.split("|")[3])
				  $("[data-Validatedata="+Verify+"]").text('E-NACH Failed');
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-GrnInplain");	
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		  $("[data-Validatedata="+Verify+"]").addClass("btn-RedInplain"); 
	    		  //$("#"+Verify).val('Failed')
				  $("#"+uniqid).val(OP.split('*')[2])
				  $("#"+Status).val(OP.split('*')[1])
				  $("#"+Verify).val(OP.split('*')[0])
				}
		},
	error: function(stm) {
		 //window.alert(LoadFrmXML("V0125"))
		alert("E-NACH Failed");
		return false;
		   }
	});
	 }
		  }			  
	}
	else
	{
	if($("#AEND_ACCNTNO").val() !="")
	{
	 if (confirm("Do you want to initiate the enach process?") == true) {	
	var PRCSID = $("#PrcsID").val();
	 $("#Save1").click();
	$.ajax({
	    url: "/TPLSW/ENACH",
	    type: 'POST',
	    data: {PRCSID:PRCSID,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()},
	    async:true,
	   // dataType: 'json',
	   // contentType:'application/json',
	    
	    success: function(stm){        
	   // var obj = JSON.parse(JSON.stringify(stm))
	   var OP=stm.split('|')[3]
	    	if (stm == "")
	    		{
	    		   alert("E-NACH Failed");
	    		   $("[data-Validatedata="+Verify+"]").text('E-NACH Failed');
	    		   $("[data-Validatedata="+Verify+"]").removeClass("btn-GrnInplain");	
	    		   $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		   $("[data-Validatedata="+Verify+"]").addClass("btn-RedInplain"); 
	    		   $("#"+Verify).val('Failed')
	    		     return;
	    		}
				else if (stm.split("|")[0]=="SUCCESS" && stm.split("|")[2] != "")
	    		{
				  $("[data-Validatedata="+Verify+"]").text('Re-Initiate E-NACH');
	    		  $("[data-Validatedata="+Verify+"]").addClass("btn-GrnInplain");	
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-RedInplain"); 
	    		  //$("#"+Verify).val('Success')
				  $("#"+uniqid).val(OP.split('*')[2])
				  $("#"+Status).val(OP.split('*')[1])
				  $("#"+Verify).val(OP.split('*')[0])
				}
				else
				{
				  alert(stm.split("|")[3])
				  $("[data-Validatedata="+Verify+"]").text('E-NACH Failed');
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-GrnInplain");	
	    		  $("[data-Validatedata="+Verify+"]").removeClass("btn-yelInplain");
	    		  $("[data-Validatedata="+Verify+"]").addClass("btn-RedInplain"); 
	    		  //$("#"+Verify).val('Failed')
				  $("#"+uniqid).val(OP.split('*')[2])
				  $("#"+Status).val(OP.split('*')[1])
				  $("#"+Verify).val(OP.split('*')[0])
				}
		},
	error: function(stm) {
		 //window.alert(LoadFrmXML("V0125"))
		alert("E-NACH Failed");
		return false;
		   }
	});
	 }
	}
	else
	{
		alert('Bank Account for Repayment is Mandatory')
		return false;
	}
	}
}

function addMonths() {
    	 var Date1=$("#DMY7").val().split('|')[1]
         //var Date2=Date1.replaceAll('/','-')
         var Date2=Date1.replace(/[/]/g,'-')

		 var date3 = new Date(Date2.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
var newDate = new Date(date3.setMonth(date3.getMonth()+$("#DMY3").val().split('|')[4]*12));
var year = newDate.getFullYear();
  var month = (1 + newDate.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = newDate.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  $("#AEND_ENDDATE").val(day + '/' + month + '/' + year)
}