var Isvalid = true;


$(function () {
	
    jQuery(function($) {  
   // $('.IsAlphaFields').keypress(function (e) {
   $(document).on("keypress", ".IsAlphaFields", function(e) {
        var regex = new RegExp("^[a-zA-Z ]*$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        else {
            e.preventDefault();
          //  alertify.alert(LoadFrmXML("V0054")+'|'+e);
            return false;
        }
    });
	
	
	$(document).on("keypress", ".IsRmkField", function(e){
	  	  if((event.keyCode == 36 || event.keyCode == 35 || event.keyCode == 62 || event.keyCode == 60 || event.keyCode == 96 || event.keyCode == 126 || event.keyCode == 39 || event.keyCode == 34 || event.keyCode == 38 ))
	  	  {
	          event.returnValue = false;
	          return;
	      }
	      event.returnValue = true;
	  	 
	      }); 
		  
		 
		 
		$(document).on("keypress", ".NONumber", function(e) {
        var regex = new RegExp("^[0-9]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
			  e.preventDefault();
          //  alertify.alert(LoadFrmXML("V0054")+'|'+e);
            return false;
            
        }
        else {
          return true;
        }
    });
	  
		 $(document).on("keypress", ".underscorehiphendot", function(e) {
	  //if(!((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123) || event.keyCode == 8 || event.keyCode == 32 || (event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode == 190 || event.keyCode == 188 || event.keyCode == 46))
	  if(!((event.keyCode > 96 && event.keyCode < 123) || (event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode == 46 || event.keyCode == 45 || event.keyCode == 95))
	  {
        event.returnValue = false;
        return;
    }
    event.returnValue = true;
	 
    }); 
		  
		  


		  
		   // $('.NoSpecialChar').keypress(function (e) {
	$(document).on("keypress", ".NoSpecialChar", function(e) {
	  if(!((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123) || event.keyCode == 8 || event.keyCode == 32 || (event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode == 190 || event.keyCode == 188 || event.keyCode == 46))
	  {
        event.returnValue = false;
        return;
    }
    event.returnValue = true;
	 
    });
	$(document).on("keypress", ".NoSpecialCharNOTHYPHEN", function(e) {
	  if(!((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123) || event.keyCode == 8 || event.keyCode == 32 || (event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode == 190 || event.keyCode == 188 || event.keyCode == 46 || event.keyCode == 45))
	  {
        event.returnValue = false;
        return;
    }
    event.returnValue = true;
	 
    });
	
	$(document).on("keypress", ".NoSpecialCharNOTDOT", function(e) {
	  if(!((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123) || event.keyCode == 8 || event.keyCode == 32 || (event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode == 190 || event.keyCode == 188))
	  {
        event.returnValue = false;
        return;
    }
    event.returnValue = true;
	 
    });
	
	
	
	$(document).on("keypress", ".AddrNoSpecialChar", function(e){
	  	  if(!((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123) || event.keyCode == 8 || event.keyCode == 32 || (event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode == 190 || event.keyCode == 188 || event.keyCode == 46||event.keyCode == 47||event.keyCode == 44||event.keyCode == 45))
	  	  {
	          event.returnValue = false;
	          return;
	      }
	      event.returnValue = true;
	  	 
	      });   
		  
		  $(document).on("keypress", ".NewVoterField", function(e){
	  	  if((event.keyCode == 36 || event.keyCode == 35 || event.keyCode == 62 || event.keyCode == 60 || event.keyCode == 96 || event.keyCode == 126 || event.keyCode == 39 || event.keyCode == 34 || event.keyCode == 38 || event.keyCode == 33 || event.keyCode == 40 || event.keyCode == 41 
		  || event.keyCode == 43 || event.keyCode == 61 || event.keyCode == 37 || event.keyCode == 44 || event.keyCode == 46 || event.keyCode == 64 || event.keyCode == 124 || event.keyCode == 92 || event.keyCode == 42 || event.keyCode == 94 || event.keyCode == 91 || event.keyCode == 93 || event.keyCode == 123
|| event.keyCode == 125 || event.keyCode == 63 || event.keyCode == 45 || event.keyCode == 95 || event.keyCode == 59 || event.keyCode == 58 ))
	  	  {
	          event.returnValue = false;
	          return;
	      }
	      event.returnValue = true;
	  	 
	      }); 
    });
//IsCURCommaFields

   jQuery(function($) {  
        
        //$('.IsCURCommaFields').on('keyup', function() {
       $(document).on("keyup", ".IsCURCommaFields", function() {
    	   var currentVal = $(this).val();
		   
		   //Added for Jira - HE-5099 start
		   var Second=currentVal.split('.')[1];
		     if(Second=="-")
		     {
		     	if(event.which == 189)
		     	{
		     		currentVal = currentVal.slice(00, -1);
		     	}
		     }
		    //Added for Jira - HE-5099 end
           if (currentVal.length == 2 && (event.which == 48 || event.which == 96)) {
            	if(parseInt(currentVal)==00)
            		{
    	            currentVal = currentVal.slice(00, -1);
            		}
    	    }
    	    
    	    $(this).val(currentVal);
            $(this).val(CurSepValid(this))  
 
        });
       
	   $(document).on("keyup", ".IsCURCommaFieldsPlus", function() {
    	   var currentVal = $(this).val();
           if (currentVal.length == 2 && (event.which == 48 || event.which == 96)) {
            	if(parseInt(currentVal)==00)
            		{
    	            currentVal = currentVal.slice(00, -1);
            		}
    	    }
    	    
    	    $(this).val(currentVal);
            $(this).val(CurSepValid1(this))  
 
        });
       
      /* $(document).on("blur", ".IsCURCommaFields", function() {
      
    	   var currentVal = $(this).val();
		   if(parseFloat(currentVal)!=0.00)
      	    {
      	    if (currentVal.length > 1){
              	var FirstLetter=currentVal.substring(0, 1)
      	    	if(parseInt(FirstLetter)==0)
      	    		{
      	    		alert ("Enter the Valid Amount,Cannot be Start with Zero")
      	    		$(this).val('')
      	    		$(this).next().removeClass('active')
                    }
      	      }
			}

          });*/
		
		 $(document).on("blur", ".IsCURCommaFields", function() {
      
    	   var currentVal = $(this).val();
    	      currentVal=currentVal.replace(/,/g,'')
		   if(parseInt(currentVal)!=0)
      	    {
      	    if (currentVal.length > 1){
				var currentVal1=currentVal[0]
         if(currentVal1=="-")
         {
         	currentVal=currentVal.replace("-","")
         }
              	var FirstLetter=currentVal.substring(0, 1)
      	    	if(parseInt(FirstLetter)==0)
      	    		{
						/*if(currentVal1=="-")
                          {
							  var OutPut=currentVal.replace(currentVal.substring(0, 1),"")
							  $(this).val(currentVal1+OutPut)
						  }
						  else
						  {
      	    		//alert ("Enter the Valid Amount,Cannot be Start with Zero")
      	    		        $(this).val(currentVal.replace(currentVal.substring(0, 1),""))
						  }*/
						  alert ("Enter the Valid Amount,Cannot be Start with Zero");
						   $(this).val('');
						   $(this).next().removeClass('active')
						 
                    }
      	      }
			}

          });
		
		       $(document).on("blur", ".NoSpecialChar", function() {
    	     var currentVal = $(this).val();
               re="!~`@#$%^&*()+=-[]\\\';{}|\":<>?~_";
        
        for(var i=0;i<currentVal.length;i++)
        	{
        	if(re.indexOf(currentVal.charAt(i))!=-1)
        	{
				
			alert("Mentioned special characters are not allowed !~`@#$%^&*()+=-[]\\\';{}|\":<>?~_");
				
        		//alert("special Character Not allowed")
        		$(this).val('')
        		$(this).next().removeClass('active')
    	        return
        	}
        	
        	}
    	     
    	     
          });
		             $(".IsGstValid").change(function () {    
                 var inputvalues = $(this).val();  
                   var GstNumber= inputvalues.toUpperCase()				 
                 var gstinformat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$');    
                 if (gstinformat.test(GstNumber)) {
                   $(".gst").val(GstNumber);					 
                   return true;    
                 }
             else
             {    
                 alert('Please Enter Valid GSTIN Number - Eg.27AACCH5453M1Z9');    
                 $(".gst").val('');    
                 $(".gst").focus();    
                }    
             });
		
		
		$(document).on("blur", ".NoSpecialCharNOTDOT", function() {
    	     var currentVal = $(this).val();
               re="!~`@#$%^&*()+=-[]\\\';{}|\":<>?~._";
        
        for(var i=0;i<currentVal.length;i++)
        	{
        	if(re.indexOf(currentVal.charAt(i))!=-1)
        	{
				
			alert("Mentioned special characters are not allowed !~`@#$%^&*()+=-[]\\\';{}|\":<>?~._");
				
        		//alert("special Character Not allowed")
        		$(this).val('')
        		$(this).next().removeClass('active')
    	        return
        	}
        	
        	}
    	     
    	     
          });
		
		
		
		
		
		$(document).on('input',".IsNegNumFields",function() {
    	      this.value = this.value.replace(/(?!^-)[^0-9.]/g, "").replace(/(\..*)\./g, '$1'); 
    	});
		
        });
    
  /*  jQuery(function($) {  
    
    $('.IsCURCommaFields').on('keyup', function() {
	 //$(this).val(formtcurncy(this.value))
     $(this).val(CurSepValid(this))  
    });
    });*/
  
  

    $(document).on("keyup", ".time", function(e) {
    //$(".time").keyup(function (e) {
	       $(this).val(timeSepValid(this));
	    });	


	 jQuery(function($) {
		 $(document).on("change", ".ISDatefield", function() {
    //$(".ISDatefield").on("change", function () {
     // DateValid(this);
    });
		 $(document).on("blur", ".ISDatefield", function() {
	 //$(".ISDatefield").on("blur", function () {
      DateValid(this);
    });
		 $(document).on("keyup", ".ISDatefield", function(e) {
    //$(".ISDatefield").keyup(function (e) {
       $(this).val(DateSepValid(this));
    });
    });
	
	
   jQuery(function($) {  
        
	   $(document).on("change", ".ISFutureDateFields", function() {
   // $('.ISFutureDateFields').on("change", function () {
        //Total time for one day
        var t1 = get2date();
        var datefield_id = $(this).attr('id');
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
        if (Diff >= 1) {
		
			$('#'+datefield_id).focus();
		 	document.getElementById(datefield_id).value = "";
           //alertify.alert(LoadFrmXML("V0090")+'|'+datefield_id);
		   
		   window.alert(LoadFrmXML("V0090"));
		  
		  
            return 
        }
		}
    });

	   $(document).on("change", ".ISPastDateFields", function() {
   // $('.ISPastDateFields').on("change", function () {
        var t1 = get2date();
        var datefield_id = $(this).attr('id');
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
    });
    
	   $(document).on("blur", ".ISFutureDateFields", function() {
    //$('.ISFutureDateFields').on("blur", function () {
        //Total time for one day
        var t1 = get2date();
        var datefield_id = $(this).attr('id');
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
        if (Diff >= 1) {
		
			$('#'+datefield_id).focus();
		 	document.getElementById(datefield_id).value = "";
           //alertify.alert(LoadFrmXML("V0090")+'|'+datefield_id);
		   
		   window.alert(LoadFrmXML("V0090"));
		  
		  
            return 
        }
		}
    });
	
	   
	   $(document).on("blur", ".ISPastDateFields", function() {
   // $('.ISPastDateFields').on("blur", function () {
        var t1 = get2date();
        var datefield_id = $(this).attr('id');
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
          //   alert(LoadFrmXML("V0091")+'|'+datefield_id);
			alert(LoadFrmXML("V0091"));
            return 
        }
		}
    });
    
 });
 
  jQuery(function($) { 
	  $(document).on("keypress", ".IsNumberFields", function(e) {
//$(".IsNumberFields").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if ((e.which > 64 && e.which < 91) || (e.which > 96 && e.which < 123) || (e.which == 8)) {
            //display error message
          //  alertify.alert(LoadFrmXML("V0062")+'|'+e.id);
            return false;
        }
	
if((e.which>31 && e.which < 45)||(e.which == 47))
{
		return false;
}
	
			var el=this;
     var number = el.value.split('.');
 
    if(number.length>1 && e.which == 46){
         return false;
    }
    var dotPos = el.value.indexOf(".");
    if(dotPos > -1 && (number[1].length > 1)){
        return false;
    }
		
		
});

/*
$(document).on("blur", ".IsNumberFields", function(e) {
//$(".IsNumberFields").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
	
	/*var Value=$(this).val()
	
	if(Value!="") 
	 {
      if($.isNumeric(Value)==false)
	  {
		$(this).val('');
		$(this).next().removeClass('active');
		return false;
	  }
	 }//
	
    if ((e.which > 64 && e.which < 91) || (e.which > 96 && e.which < 123) || (e.which == 8)) {
            //display error message
          //  alertify.alert(LoadFrmXML("V0062")+'|'+e.id);
            return false;
        }
	
if((e.which>31 && e.which < 45)||(e.which == 47))
{
		return false;
}
	
			var el=this;
     var number = el.value.split('.');
 
    if(number.length>1 && e.which == 46){
         return false;
    }
    var dotPos = el.value.indexOf(".");
    if(dotPos > -1 && (number[1].length > 1)){
        return false;
    }
		
		
}); */
	$(document).on("keypress", ".IsNumberFieldsSpl", function(e) {
		//$(".IsNumberFieldsSpl").keypress(function (e) {
      if ((e.which > 64 && e.which < 91) || (e.which > 96 && e.which < 123) || (e.which == 8)|| (e.which == 46)) {
		            //display error message
		          //  alertify.alert(LoadFrmXML("V0062")+'|'+e.id);
		     return false;
		   }
		});
		
$(document).on("blur", ".IsNumberFields", function() {
   NumOnly(this);
})
		
  });
  
function NumOnly(Event)
{
   var FldVal=$(Event).val()
  if($(Event).hasClass("IsCURCommaFields"))
  {
  
  }
   else if($(Event).hasClass("IsAadharFields"))
  {
  
  }
 else if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(FldVal))
 {
	 if(FldVal!="")
	 {
  if(isNumeric(FldVal)== false)
   {
	   alert('Kindly enter valid format')
    $(Event).val('');
    $(Event).next().removeClass('active');
   }
	 }
 }
}
  
 



  
  
  
   jQuery(function($) { 
	   $(document).on("keypress", ".IsMinusChk", function(e) {
//$(".IsMinusChk").keypress(function (e) {
    // 
   
    //$(this).val($(this).val().replace(/[^0-9\.]/g,''));
	
            if ((event.which != 46 || e.indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
   
  
   
   
});
  });
  
  
  
    
  jQuery(function($) { 
	  $(document).on("keypress", ".IsNegativeChk", function(e) {
//$(".IsNegativeChk").keypress(function (e) {
    // 
   
    //$(this).val($(this).val().replace(/[^0-9\.]/g,''));
	
	if (e.keyCode != 45) {

                event.preventDefault();
            }
   
});
  });
  
  
  $(document).on("change", ".IsEmailFields", function() {
//$('.IsEmailFields').change(function () {
    
	EmailValid(this);
	
});






 /*$('.IsNumberFields').blur(function () {
    
	NumericValid(this);
	
});
*/


 
  jQuery(function($) { 
	  $(document).on("blur", ".IsMobileFields", function() {
//$('.IsMobileFields').blur(function () {
   
   MobileValid(this);
    
   });   
   
    $(document).on("blur", ".IsChequeFields", function() {
		//$('.IsMobileFields').blur(function () {
		  ChequeValid(this);
		   });  
   
	  $(document).on("blur", ".IsUpprCse", function() {
   //$('.IsUpprCse').blur(function () {
   

$(this).val($(this).val().toUpperCase())

});

	  $(document).on("blur", ".IsCINno", function() {
//$('.IsCINno').blur(function () {
   
   //IsCINno(this);
    IsCinValidation(this);

});
	  $(document).on("change", ".IsAadharFields", function() {
//$('.IsAadharFields').blur(function () {
   
   AadharValid(this);

});

	  $(document).on("blur", ".IsPinFields", function() {
//$('.IsPinFields').blur(function () {
   
   PinValid(this);

});

/*
$('.IsPanFields').blur(function () {
   
PanValid(this);
$(this).val($(this).val().toUpperCase())

}); */

	  $(document).on("blur", ".IsPanFields", function() {
//$('.IsPanFields').blur(function () {
	 
	var CusType=$(this).attr("data-validate").split("|")[0]	
		
	var constitution=$(this).attr("data-validate").split("|")[1]
	CusType=$('#'+CusType).val();
	constitution=$('#'+constitution).val();
	if(CusType=="Non-Individual")
	{

	NonIndPanValid(this,constitution);
	$(this).val($(this).val().toUpperCase())
	}
	else
	{
	PanValid(this);
	$(this).val($(this).val().toUpperCase())	
	}	
	});
	
	//Udayam Start
	$(document).on("blur", ".IsUAMFields", function() {

       ChkValidUAM(this);
    });

	 $(document).on("keyup", ".Udayamfield", function(e) {
	 //$(".ISDatefield").on("blur", function () {
	  $(this).val(UdayamSepValid(this));
    });
	
function ChkValidUAM(Obj) {
	
	if (Obj == null) Obj = window.event.srcElement;
     if (Obj.value != "") {
       /*  ObjVal = Obj.value;
         var panPat = /^([a-zA-Z]{2})(\d{2})([a-zA-Z]{1})(\d{7})$/;
       //  var code = /([C c])/;
         var code_chk = ObjVal.substring(3,4);
         if (ObjVal.search(panPat) == -1) {
             alert("Enter Valid UAM Number eg.AA11A1111111");
             Obj.focus();
             Obj.value="";
             return false;
         }*/
		 
		 ObjVal = Obj.value;
		 
		  var regex = RegExp('UDYAM-[a-zA-Z]{2}-[0-9]{2}-[0-9]{7}','g');
    //var str1 = 'applicationcode1234';
		 
         //var panPat = /^([UDAYAM]{5})(\d{2})([a-zA-Z]{1})(\d{7})$/;
       //  var code = /([C c])/;
         //var code_chk = ObjVal.substring(3,4);
         if (regex.test(ObjVal) != true) {
             alert("Enter Valid Udyam Registration No eg.UDYAM-XX-00-0000000");
             Obj.focus();
             Obj.value="";
             return false;
         }
		 
     }
}

 function UdayamSepValid(Evnt)  
  {
	  
	  if (Evnt.keyCode != 16) {
            if ($(Evnt).val().length == 5) {
                return $(Evnt).val() + "-";
            } else if ($(Evnt).val().length == 8) {
                return $(Evnt).val() + "-";
            }
			else if ($(Evnt).val().length == 11) {
                return $(Evnt).val() + "-";
            }
			else{
				return $(Evnt).val();
				
			}
			/*else if ($(Evnt).val().length >= 10)
			{
			return false;
			}*/
        }
	  
  }

//Udayam End


  $(document).on("blur", ".IsNormalPanFields", function() {
			 
			{
			PanValid(this);
			$(this).val($(this).val().toUpperCase())	
			}	
			});



	  $(document).on("blur", ".IsDINFields", function() {
//$('.IsDINFields').blur(function () {
   
DINValidate(this);

});

	  $(document).on("change", ".IsIFSCFields", function() {
 //$('.IsIFSCFields').change(function () {
	    
		IFSCValid(this);
		
	});

	  $(document).on("change", ".IsLandlneFields", function() {
//$('.IsLandlneFields').change(function () {
	    
		LandlneValid(this);
		
	});

	  $(document).on("change", ".IsNoSpcharFields", function() {
	//$('.IsNoSpcharFields').change(function () {
    
	NoSpcharValid(this);
	
});

	  $(document).on("change", ".IsGSTINFields", function() {
	//$('.IsGSTINFields').change(function () {
		
	GSTINValid(this);
	});
	
	  $(document).on("change", ".IsVoterFields", function() {
	//$('.IsVoterFields').change(function () {
		VoterIDValid(this);
		});
	
	  $(document).on("change", ".IsDLFields", function() {
	//$('.IsDLFields').change(function () {
		DLValid(this);
		});
	
	
  });

});





function readonly()
{

  var inputs = document.getElementsByTagName('input');
 

          for (var i = 0; i < inputs.length; i++)
	 {

                if (inputs[i].readOnly) {
		inputs[i].style.background = "#e8e8ee";
		//inputs[i].className='xdETTROText';
		inputs[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		
              
            }
        }
	
DsablInactfrms();
DCCMInstnc("LdSbmt");

FldDocOnld()

}
 
 function DsablInactfrms()
		{
				
		var View = "";
		
		
			if($(window.parent.document).find('form').attr('id') == "AllForms")
			{
			if($(window.parent.document).find('.active').attr('name') == "IA")
			{
			
			Pgdsbl();
				
			}
			else if($(window.parent.document).find("#SubmitSuccess").val()=='Hist')
			{
				//$("#SubmitSuccess").val("Hist");
					Pgdsbl();
					
				
			}
			}
			else{
				
				if($(window.parent.parent.document).find('.active').attr('name') == "IA")
			{
			
			Pgdsbl();
				
			}
			else if($(window.parent.parent.document).find("#SubmitSuccess").val()=='Hist')
			{
				//$("#SubmitSuccess").val("Hist");
					Pgdsbl();
					
			}
			else if ($(window.document).find("#SubmitSuccess").val()=='Hist')
			{				
					Pgdsbl();
			}
				
			}
			//alertify.alert('HI');
			//SCF
			if($(document).find('.active').attr('name') == "IA")
			{
			//var dID=$(document).find('.active')[0].id;
			//PageDisable('C_'+dID);
			PageDisable();
			}
			//SCF
		}
 
  function PageDisable()
{

	//var dDiv=document.getElementById(dID);
	//var gridSbmit=document.getElementsByClassName('GridSubmit')[0].value='Hist';
  var formName=document.getElementsByTagName('Form')[0].id;
  
  var inputs = document.forms[formName].getElementsByTagName('input');

		
  
          for (var i = 0; i < inputs.length; i++)
	 {
           
		 if(inputs[i].className != "Radio_CoAppl") 
		{		 
		//inputs[i].style.background = "#e8e8ee";
		inputs[i].disabled=true;
		//inputs[i].className='xdETTROText';
		//inputs[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		}  
        }

		  var selects = document.forms[formName].getElementsByTagName('select');

          for (var i = 0; i < selects.length; i++)
	 {
              
		//inputs[i].style.background = "#e8e8ee";
		selects[i].disabled=true;
		//inputs[i].className='xdETTROText';
		//selects[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		  
        }

	  var imgs = document.forms[formName].getElementsByTagName('img');

          for (var i = 0; i < imgs.length; i++)
	 {
              
		//inputs[i].style.background = "#e8e8ee";
		if(imgs[i].id != "Attach"&&imgs[i].id != "ExcelDownload"&&imgs[i].id != "GridView"&&$(imgs[i]).closest('a').attr('id')!="attachview" &&$(imgs[i]).closest('a').attr('id')!="comments")
		{
			
		//	if(imgs[i].id=="GridEdit")
			//{
				
			//	imgs[i].src.replace(imgs[i].src.split('/').pop(-1),"review1.png");
			//}
			
		imgs[i].style.display="none";
		}
		//inputs[i].className='xdETTROText';
		//imgs[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		  
        }
		
		
		  var textareas = document.forms[formName].getElementsByTagName('textarea');

          for (var i = 0; i < textareas.length; i++)
	 {
              
		//inputs[i].style.background = "#e8e8ee";
		textareas[i].disabled=true;
		//inputs[i].className='xdETTROText';
		//imgs[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		  
        }


				  var sbmtbtn = document.getElementsByName('assignmentComplete');

          for (var i = 0; i < sbmtbtn.length; i++)
	 {
              
		//inputs[i].style.background = "#e8e8ee";
		sbmtbtn[i].disabled=true;
		//inputs[i].className='xdETTROText';
		//imgs[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		  
        }
		
}

 function SetGridViewmodeVal()
		{
			
			if($(window.parent.document).find('form').attr('id') == "AllForms")
			{
			if($(window.parent.document).find('.active').attr('name') == "IA")
			{
			
			$("#SubmitSuccess").val("IA");
				
			}
			else if($(window.parent.document).find("#SubmitSuccess").val()=='Hist')
			{
				$("#SubmitSuccess").val("Hist");							
				
			}
			}
			else{
				
				if($(window.parent.parent.document).find('.active').attr('name') == "IA")
			{
			
			$("#SubmitSuccess").val("IA");
				
			}
			else if($(window.parent.parent.document).find("#SubmitSuccess").val()=='Hist')
			{
				$("#SubmitSuccess").val("Hist");									
			}
			else if ($(window.parent.document).find("#SubmitSuccess").val()=='Hist')
			{				
					$("#SubmitSuccess").val("Hist");	
			}
				
			}
			//alertify.alert('HI');
			
		}
 
 function Pgdsbl()
{

  var inputs = document.getElementsByTagName('input');

          for (var i = 0; i < inputs.length; i++)
	 {
           
		 if(inputs[i].className != "Radio_CoAppl") 
		{		 
		//inputs[i].style.background = "#e8e8ee";
		inputs[i].disabled=true;
		//inputs[i].className='xdETTROText';
		//inputs[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		}  
        }

		  var selects = document.getElementsByTagName('select');

          for (var i = 0; i < selects.length; i++)
	 {
              
		//inputs[i].style.background = "#e8e8ee";
		selects[i].disabled=true;
		//inputs[i].className='xdETTROText';
		//selects[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		  
        }

	  var imgs = document.getElementsByTagName('img');

          for (var i = 0; i < imgs.length; i++)
	 {
              
		//inputs[i].style.background = "#e8e8ee";
		if(imgs[i].id != "GridView"&&$(imgs[i]).closest('a').attr('id')!="attachview" &&$(imgs[i]).closest('a').attr('id')!="comments")
		{
			
		//	if(imgs[i].id=="GridEdit")
			//{
				
			//	imgs[i].src.replace(imgs[i].src.split('/').pop(-1),"review1.png");
			//}
			
		imgs[i].style.display="none";
		}
		//inputs[i].className='xdETTROText';
		//imgs[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		  
        }
		
		
		  var textareas = document.getElementsByTagName('textarea');

          for (var i = 0; i < textareas.length; i++)
	 {
              
		//inputs[i].style.background = "#e8e8ee";
		textareas[i].disabled=true;
		//inputs[i].className='xdETTROText';
		//imgs[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		  
        }


				  var sbmtbtn = document.getElementsByName('assignmentComplete');

          for (var i = 0; i < sbmtbtn.length; i++)
	 {
              
		//inputs[i].style.background = "#e8e8ee";
		sbmtbtn[i].disabled=true;
		//inputs[i].className='xdETTROText';
		//imgs[i].tabIndex = "-1";
		//elArr[i].style.cursor=  'not-allowed';
		//elArr[i].style.cursor=  '';
		  
        }
		
}



function FldDocOnld()
{

var len=$(document).find('input[type="file"]').length;


for(i=0;i<=len;i++)
{

if($($(document).find('input[type="file"]')[i]).closest('td').find('input[type="hidden"]').val()=="")
{
$($(document).find('input[type="file"]')[i]).closest('td').find('input[type="button"]').val('Upload');
}
else
{
$($(document).find('input[type="file"]')[i]).attr('disabled',true);
$($(document).find('input[type="file"]')[i]).closest('td').find('input[type="button"]').val('View');
$($(document).find('input[type="file"]')[i]).closest('td').find('input[type="button"]').attr('disabled',false);
}

}
}
       

	   
	   
function LoadFrmXML(XMLNode)
	{
			
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  xmlhttp.open("GET","ThemeproLO/Common/XML/Config.xml",false);
		  xmlhttp.send();
		  xmlDoc=xmlhttp.responseXML; 
		  var message = xmlDoc.getElementsByTagName(XMLNode)[0].childNodes[0].nodeValue;
		  return message;
}


function LoadGridLablName(GridNode)
{
		
	/*if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	var filename = GridNode.split('|')[1];
	var nodeval= GridNode.split('|')[0];
	
	  xmlhttp.open("GET","ThemeproLO/Common/XML/"+filename+".xml",false);
	  xmlhttp.send();
	  xmlDoc=xmlhttp.responseXML; 
	  var message = xmlDoc.getElementsByTagName(nodeval)[0].innerHTML;*/
	  
	  var nodeval= GridNode.split('|')[0];
	  var message="";
	  if($("#"+nodeval+"GrdLbl").length == 1)
	  {
		  
		message = $("#"+nodeval+"GrdLbl").html().replace("<tbody>","").replace("</tbody>","");  
		  
	  }
	  
	  return message;
	 
}


function hashcheck()
{
	
	var securityname123 = "#currentUser.firstName#";
alertify.alert(securityname123);

}

// Function (ed by SJA for Changing color on focus and on focus out
function fnOnFocus(ctrl)
// Change the color of the control when focus is set to that
{
    //ctrl.className = 'textfocus';
	if($(ctrl).val()=="0"||$(ctrl).val()=="0.00")
		{
		$(ctrl).val("");
		}
		else{
			if($(ctrl).hasClass("IsCURCommaFields"))
	{
	//	$(ctrl).val(CURCommaSep(ctrl.value));
			$(ctrl).val(CurSepValid(ctrl));
    }
		
			
		}
	
}


function fnOnFocusRpt(ctrl)
// Change the color of the control when focus is set to that
{
    //ctrl.className = 'textfocusrpt';
}

function fnOnFocusOutRpt(ctrl)
// Change the color of the control when focus is set to that
{
    //ctrl.className = 'textfocusoutrpt';

}

function fnOnFocusOut(ctrl)
// Change the color of the control when focus is set to that
{
    //ctrl.className = 'textfocusout';
	if($(ctrl).hasClass("IsCURCommaFields"))
	{
	if($(ctrl).val()=="")
		{
		$(ctrl).val('0');
		}
    }
}


function getUrlParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	//return results === null ? "" : decodeURIComponent(results[1]);
}

/*
function get2date() {

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

    return today = dd + '/' + mm + '/' + yyyy;
}
*/

function IsCinValidation(Evnt){
	  var inputvalues = Evnt.value;
	  var cininformat = new RegExp(/^([U-UL-L]{1})(\d{5})([a-zA-Z]{2})(\d{4})([a-zA-Z]{3})(\d{6})$/);
	  if (cininformat.test(inputvalues)) {
		  $(Evnt).val($(Evnt).val().toUpperCase());
			return true;
    } else {
		alert('Enter Valid CIN Number. Eg, U11111AA9999AAA111111');
		//Evnt.focus();
    	$(Evnt).val("");
		return false;
    }  
  }

  function NumericValid(Evnt)
  {
  var myVar = $(Evnt).val();
var myNum = +myVar;
if (isNaN(myNum)) {
$(Evnt).val('');   
window.alert(LoadFrmXML("V0014"));
}
}
  
/*
  function PinValid(Evnt)
  {
	  
	   var id = $(Evnt).attr('id');
	
	var Val = $(Evnt).val();
	
	Val = Val.replace(/ /g,'');
	
	if (Val != "")
	{
	
    if ((Val.length > 6) || (Val.length < 6)) {

        $(Evnt).val("");
        //alertify.alert(LoadFrmXML("V0103")+'|'+id);
		window.alert(LoadFrmXML("V0103"));
    }
	else
	{
		
		$(Evnt).val(Val);
	}
	} 
  }
  */
  
   
  function PinValid(Evnt)
  { 
	  var exp= /^\D*(\d)(?:\D*|\1)*$/;
	  
	  //var lastZero = /^0{3}.*$/;
	  //var lastZero = /^0{4,6}.*$/; (\d{2}(0))+(?!\d)
	   var lastZero = /^\d{4,6}(0).*$/
	  
	   var id = $(Evnt).attr('id');
	
	var Val = $(Evnt).val();
		Val = Val.replace(/ /g,'');
	
	if (Val != "")
	{
    if ((Val.length > 6) || (Val.length < 6)) {
		Evnt.focus();
        $(Evnt).val("");
        //alertify.alert(LoadFrmXML("V0103")+'|'+id);
		window.alert(LoadFrmXML("V0103"));
    }
	else if(Val.match('123456'))
	{
		Evnt.focus();
		$(Evnt).val("");
		window.alert('Enter Correct PIN Number');
		//window.alert('PIN number cannot End with three zeros');
	}
	else if(Val.substr(3,5)=="000")
	{
		Evnt.focus();
			 $(Evnt).val("");
			//alertify.alert(LoadFrmXML("V0103")+'|'+id);
			//window.alert(LoadFrmXML("V0103"));
			window.alert('Last 3 digits zero Enter Correct PIN Number');
			
	}
	//else if(lastZero.test(Val))
	//{
		//window.alert('Enter Correct PIN Number');
	//}	
	else
	{
		if(exp.test(Val))
		{
			
			Evnt.focus();
			$(Evnt).val("");
			window.alert("Enter Valid Pin Number ");
		}
		else
		{
			$(Evnt).val(Val);
		}	
	}
	} 
  }
  
  
  
  function AadharValid(Evnt)
  { 
	 var id = $(Evnt).attr('id');
	
	var Val = $(Evnt).val();
	
	Val = Val.replace(/ /g,'');
	
	if (Val != "")
	{
	
    if ((Val.length > 12) || (Val.length < 12)) {
		Evnt.focus();
        $(Evnt).val("XXXXXXXX");
        //alertify.alert(LoadFrmXML("V0097")+'|'+id);
		window.alert(LoadFrmXML("V0097"));
    }
	else if(Val.slice(1, 8) != "XXXXXXXX")
	{
		$(Evnt).val("XXXXXXXX"+Val.slice(8, 12));
	}
	else
	{
		$(Evnt).val(Val);
	}
	}
  }
  
  
  
   function VoterID(Evnt)
  {
	  
	   var id = $(Evnt).attr('id');
	
	var Val = $(Evnt).val();
	
	Val = Val.replace(/ /g,'');
	
	if (Val != "")
	{

    if ((Val.length <10) || (Val.length > 20)) {

	
	Evnt.focus();
        $(Evnt).val("");
        //alertify.alert(LoadFrmXML("V0097")+'|'+id);
		window.alert(LoadFrmXML("V0096"));
    }
	else
	{
		
		$(Evnt).val(Val);
		
	}
	}
  }
  
  
  
  
  
  
  /*
  function MobileValid(Evnt)
  {
	  
	   var id = $(Evnt).attr('id');
	
	
	var Val = $(Evnt).val();
	
	Val = Val.replace(/ /g,'');
	
	
    if ((Val.length > 10) || (Val.length < 10)) {

        $(Evnt).val("");
		
       // alertify.alert(LoadFrmXML("V0064")+'|'+id);
		 window.alert(LoadFrmXML("V0064"));
		 event.preventDefault();
		event.stopPropagation();
return false
    }
	
	  
  }
  */
  
  function MobileValid(Evnt)
  {
	   var id = $(Evnt).attr('id');
	   var Val = $(Evnt).val();
	   Val = Val.replace(/ /g,'');
	   
	   var filter = /^[6-9][0-9]{9}$/;
	   
	    var repetexp= /^\D*(\d)(?:\D*|\1)*$/;
		
		
if (Val != "") {
	   
    if ((Val.length > 10) || (Val.length < 10)) 
	{
		Evnt.focus();
        $(Evnt).val("");
       // alertify.alert(LoadFrmXML("V0064")+'|'+id);
		 //window.alert(LoadFrmXML("V0064"));
		 window.alert('The number must be 10 digits numeric');
		 event.preventDefault();
		event.stopPropagation();
		return //false
    }
	else if(!filter.test(Val)) 
	{
		Evnt.focus();
		$(Evnt).val("");
		window.alert('The number must start with 9,8,7 or 6');
		return
	}
	
	else if(repetexp.test(Val)) 
	{
		Evnt.focus();
		$(Evnt).val("");
		window.alert('All digits are same number ');
		return
	}
}	
  }
  
    function ChequeValid(Evnt)
   { 
	   var id = $(Evnt).attr('id');
	   var Val = $(Evnt).val();
	   Val = Val.replace(/ /g,'');
  if (Val != "") {   
	   if ((Val.length > 6) || (Val.length < 6)) 
		{
			Evnt.focus();
	        $(Evnt).val("");
	       // alertify.alert(LoadFrmXML("V0064")+'|'+id);
			 //window.alert(LoadFrmXML("V0064"));
			 window.alert('The number must be 6 digits numeric');
			 event.preventDefault();
			event.stopPropagation();
			return //false
	    }
	 }  
   }
  
  function EmailValid(Evnt)
  {  $('span.error-keyup-7').remove();
    var inputVal = $(Evnt).val();
    var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(inputVal!="" && inputVal !="NA")
	{
    if (!emailReg.test(inputVal)) {
        
		//Evnt.focus();
		$(Evnt).val("");

       	 window.alert(LoadFrmXML("V0063"));
		  Isvalid=false;
		  return false
    }
	}
  }
  
  function NumberValid(Evnt,e)
  {
	  
	   if ((e.which > 64 && e.which < 91) || (e.which > 96 && e.which < 123) || (e.which == 8)) {
        //display error message
        //alertify.alert(LoadFrmXML("V0062")+'|'+Evnt.id);
		 window.alert(LoadFrmXML("V0062"));
		Evnt.value="";
        return false;
		
    }
	  
  }
  
  
   function IFSCValid(Evnt)
  {
	 var IFSCCodeval = $(Evnt).val();
	 
	 
	 if(IFSCCodeval!='')
	 {
	 if(IFSCCodeval.length <11 || IFSCCodeval.length >11 )
	 {
		 
		Evnt.focus();
		$(Evnt).val("");
			
  	    	 window.alert(LoadFrmXML("V0157"));
              return false;
	 }
	  else 
   	    {
   	    	return true;
        }
	 }
	 
	/* var ifscexp = /^[^\s]{4}\d{7}$/;
   		 
   	    if (!ifscexp.test(IFSCCodeval))
   	    {     
   	    	$(Evnt).val("");
			
  	    	 window.alert(LoadFrmXML("V0157"));
              return false;
   	    }
   	    else 
   	    {
   	    	return true;
           }*/
 
  }
  
  function LandlneValid(Evnt)
  {
	 var Landlneval = $(Evnt).val();
	 
	 var Landlneexp = /^[0-9-,+]*$/
     var repetexp= /^\D*(\d)(?:\D*|\1)*$/;
	  
	  
	  
	   if(Landlneval!='')
	 {
   	    if (!Landlneexp.test(Landlneval))
   	    {     
			Evnt.focus();
   	    	$(Evnt).val("");
			
  	    	 window.alert(LoadFrmXML("V0162"));
              return false;
   	    }
		else if(repetexp.test(Landlneval)) 
		{
			Evnt.focus();
			$(Evnt).val("");
			window.alert('All digits are same number ');
			return
		}
   	    else 
   	    {
   	    	return true;
           }
	 }
  }
  
   function NoSpcharValid(Evnt)
   {
   	 var NotSpcharval = $(Evnt).val();
   	 
   //	var NotSpcharexp = /^[0-9,\-,+,!,@,#,$,%,^,&,*]g$/
			var NotSpcharexp = /^[ 0-9]*$/
			
			if(NotSpcharval!="")
			{
    	    if (NotSpcharexp.test(NotSpcharval))
    	    {     
    	    	return true;
    	    }
    	    else 
    	    {
    	    	Evnt.focus();
    	    	$(Evnt).val("");
       			
      	    	 window.alert(LoadFrmXML("V0161"));
                  return false;
    	    	
            }
			}
   }
   
   function GSTINValid(Evnt){
	   var inputvalues = $(Evnt).val();
	   ///^([0-9]){2}([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}([0-9]){1}([a-zA-Z]){1}([0-9]){1}?$/;
    var gstinformat = new RegExp('^([0-9]){2}([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}([0-9]){1}([a-zA-Z]){1}([a-zA-Z0-9]){1}?$');
    
    if (gstinformat.test(inputvalues)) 
	{
		$(Evnt).val($(Evnt).val().toUpperCase());
		return true;
    } 
	else 
	{
		alertify.alert('Enter Valid 15 digit GSTIN Number. Eg, 11AAAAA1111A1Z1');
        Evnt.focus();
    	$(Evnt).val("");
        
    }
   }
   
   
   function VoterIDValid(Evnt){
	   var inputvalues = $(Evnt).val();
	   ///^([0-9]){2}([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}([0-9]){1}([a-zA-Z]){1}([0-9]){1}?$/;
    var gstinformat = new RegExp('^([a-zA-Z]){3}([0-9]){7}?$');
    
    if (gstinformat.test(inputvalues)) 
	{
		$(Evnt).val($(Evnt).val().toUpperCase());
		return true;
    } 
	else 
	{
		alert('Enter Valid 10 digit Voter ID. Eg, AAA1111111');
        //Evnt.focus();
    	$(Evnt).val("");
        
    }
   }
   
  /* function DLValid(Evnt){
	   var inputvalues = $(Evnt).val();
	   ///^([0-9]){2}([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}([0-9]){1}([a-zA-Z]){1}([0-9]){1}?$/;
    var dlformat = new regex('^[0-9a-zA-Z]{4,9}$')
    
    if (dlformat.test(inputvalues)) 
	{
		$(Evnt).val($(Evnt).val().toUpperCase());
		return true;
    } 
	else 
	{
		alert('Enter Valid 16 digit Driving Licence');
        //Evnt.focus();
    	$(Evnt).val("");
        
    }
   }*/
   
   
    
  
  function DateValid(Evnt)  
  {
	  var param = $(Evnt).attr('id');
        var r = document.getElementById(param).value;
		
		if(r!="")
		{
		
		
        if (r.length == 0) {

            return document.getElementById(param).value = "";
        }
        if (r.length != 10) {
             //alertify.alert(LoadFrmXML("V0001")+'|'+param);
			 Evnt.focus();
			 window.alert(LoadFrmXML("V0001"));
            return document.getElementById(param).value = "";
        }

        var res = r.split("/");
        var dd = res[0];
        var mm = res[1];
		var yy = res[2];
		if(mm==undefined||yy==undefined)
		{
			 Evnt.focus();
			window.alert(LoadFrmXML("V0001"));
            return document.getElementById(param).value = "";
		}
      
        var yyyy = res[2].length;
        if (yy > 3000 || yy < 1900) {
           // alertify.alert(LoadFrmXML("V0001")+'|'+param);
		    Evnt.focus();
			window.alert(LoadFrmXML("V0001"));
            return document.getElementById(param).value = "";
        }
        if (dd > 31 || dd < 1) {
            //alertify.alert(LoadFrmXML("V0001")+'|'+param);
			 Evnt.focus();
			window.alert(LoadFrmXML("V0001"));
            return document.getElementById(param).value = "";
        }
        if (mm > 12 || mm < 1) {
            //alertify.alert(LoadFrmXML("V0001")+'|'+param);
			 Evnt.focus();
			 window.alert(LoadFrmXML("V0001"));
            return document.getElementById(param).value = "";
        }
        if (yyyy != 4) {
           // alertify.alert(LoadFrmXML("V0001")+'|'+param);
		    Evnt.focus();
			            window.alert(LoadFrmXML("V0001"));
            return document.getElementById(param).value = "";
        }
        var t1 = get2date();

        var t2 = document.getElementById(param).value;

        if (mm == 02) {
            if (yy % 4 != 0) {
                if (dd == 29 || dd == 30 || dd == 31) {

                   // alertify.alert(+yy + LoadFrmXML("V0065")+'|'+param);
				    Evnt.focus();
					 window.alert(+yy + LoadFrmXML("V0065"));
                    return document.getElementById(param).value = "";
                }
            }
            else if (yy % 4 == 0) {
                if (dd == 30 || dd == 31) {

                    //alertify.alert(LoadFrmXML("V0065")+'|'+param);
					 Evnt.focus();
					window.alert(LoadFrmXML("V0065"));
                    return document.getElementById(param).value = "";
                }
            }
        }
        else if (mm == 04 || mm == 06 || mm == 09 || mm == 11) {
            if (dd == 31) {
                //alertify.alert(LoadFrmXML("V0066")+'|'+param);
				 Evnt.focus();
				window.alert(LoadFrmXML("V0066"));
                return document.getElementById(param).value = "";
            }
        }
		}
  }
  
  
  function DateSepValid(Evnt)  
  {
	  
	  if (Evnt.keyCode != 8) {
            if ($(Evnt).val().length == 2) {
                return $(Evnt).val() + "/";
            } else if ($(Evnt).val().length == 5) {
                return $(Evnt).val() + "/";
            }
			else{
				return $(Evnt).val();
				
			}
			/*else if ($(Evnt).val().length >= 10)
			{
			return false;
			}*/
        }
	  
  }
  /*
 function CurSepValid(Evnt)
 { // skip for arrow keys
        if (Evnt.which >= 37 && Evnt.which <= 40) {
            Evnt.preventDefault();
        }
		
		var Val = $(Evnt).val().split('.')[0];
		
  return Val.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     
 }*/
 //Indian Format
 
 
 
  /* function CurSepValid(Evnt)
  { // skip for arrow keys
        if (Evnt.which >= 37 && Evnt.which <= 40) {
          Evnt.preventDefault();
      }
        var x = $(Evnt).val().split('.')[0];
        x=x.toString();
        x=x.replace(/\D/g, '');
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return(res); 
  }*/
  
  
  //Accept Decimal
  /*   function CurSepValid(Evnt)
  { // skip for arrow keys
        if (Evnt.which >= 37 && Evnt.which <= 40) {
          Evnt.preventDefault();
      }
        var x = $(Evnt).val().split('.')[0];
		var dec=$(Evnt).val().split('.')[1];
        x=x.toString();
        x=x.replace(/\D/g, '');
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers != '')
            lastThree = ',' + lastThree;
		
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
		
		var Finl;
		if(dec!=undefined)
		{
			Finl=res+"."+dec;
		}
		else
		{
			Finl=res;
		}
		
        return(Finl); 
  }*/
 
 function CurSepValid(Evnt)
 { // skip for arrow keys
        if (Evnt.which >= 37 && Evnt.which <= 40) {
          Evnt.preventDefault();
      }
        var x = $(Evnt).val().split('.')[0];
		if($(Evnt).val().split('.')[1] != undefined)
        {
        	var dec=$(Evnt).val().split('.')[1]//.substring(0, 2)
        }
        else
        {
        	var dec=$(Evnt).val().split('.')[1]
        }
        x=x.toString();
        x=x.replace(/(?!^-)[^0-9.]/g, "")
         //replace(/\D/g, '')
         var Symple=x[0]
         if(Symple=="-")
         {
         	x=x.replace("-","");
         }
    	      x=x.replace(/,/g,'')
		   if(parseInt(x)!=0)
      	    {
      	    if (x.length > 1){
              	var FirstLetter=x.substring(0, 1)
      	    	if(parseInt(FirstLetter)==0)
      	    		{
      	    		//alert ("Enter the Valid Amount,Cannot be Start with Zero")
      	    		$(this).val('')
      	    		$(this).next().removeClass('active')
                    }
      	      }
			}
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers != '')
            lastThree = ',' + lastThree;
		
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
		
		var Finl;
		if(dec!=undefined)
		{
			dec=dec.replace(/(?!^-)[^0-9.]/g, "");
		
         	dec=dec.replace("-","")
            Finl=res+"."+dec.substring(0, 2);
			
			//Finl=res+"."+dec;
		}
		else
		{
			Finl=res;
		}

		if(Symple=="-")
		{
			Finl=Symple+Finl
		}
        return(Finl); 
  }
function CurSepValid1(Evnt)
  { // skip for arrow keys
        if (Evnt.which >= 37 && Evnt.which <= 40) {
          Evnt.preventDefault();
      }
        var x = $(Evnt).val().split('.')[0];
		if($(Evnt).val().split('.')[1] != undefined)
        {
        	var dec=$(Evnt).val().split('.')[1].substring(0, 2)
        }
        else
        {
        	var dec=$(Evnt).val().split('.')[1]
        }
        x=x.toString();
        x=x.replace(/\D/g, '')
         var Symple=x[0]
         if(Symple=="-")
         {
         	x=x.replace("-","")
         }
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers != '')
            lastThree = ',' + lastThree;
		
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
		
		var Finl;
		if(dec!=undefined)
		{
			Finl=res+"."+dec;
		}
		else
		{
			Finl=res;
		}

		if(Symple=="-")
		{
			Finl=Symple+Finl
		}
        return(Finl); 
  }
  function PanValid(Obj) {    
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
		 if (code.test(code_chk) == false) {
             alert("Invalid Pan No eg.AAAPA1111A");
             Obj.value="";
             return false;
         }
		 
		
 /*       var code_chk = ObjVal.substring(3,4);
         if(code_chk=="C")
        	 {
        	 alert('Invalid PAN ID for Individual')
        	 Obj.focus();
              Obj.value="";
        	 return false;
        	}
			
	    var code_chk = ObjVal.substring(3,4);
         if(code_chk=="F")
        	 {
        	 alert('Invalid PAN ID for Individual')
        	 Obj.focus();
              Obj.value="";
        	 return false;
        	 }*/
    }
} 


function DINValidate(Obj)
{
	if (Obj.value != "") 
	{
		var val=Obj.value;
		if(val.length!=8)
		{
			Obj.focus();
            Obj.value="";
			alertify.alert('DIN No. must be 8 digits.');
		}
	}
		
}



function CURCommaSep(Y) {
    var parts = Y.toString().split(".");
    
	//parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //  return parts.join(".");
    
    var x = Y.toString().split('.')[0];
	if(Y.toString().split('.')[1] != undefined)
    {
    	var dec=Y.toString().split('.')[1].substring(0, 2)
    }
    else
    {
    	var dec=Y.toString().split('.')[1]
    }
	
    x=x.toString();
    x=x.replace(/(?!^-)[^0-9.]/g, "")
     //replace(/\D/g, '')
     var Symple=x[0]
     if(Symple=="-")
     {
     	x=x.replace("-","")
     }
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
	
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
	
	var Finl;
	if(dec!=undefined)
	{
		Finl=res+"."+dec;
	}
	else
	{
		Finl=res;
	}

	if(Symple=="-")
	{
		Finl=Symple+Finl
	}
    return(Finl); 
    
    
}

/*
function CURCommaSep(x) {
    var parts = x.toString().split(".");
    
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
*/

/*function CURINRCommaSep(x){
x=parseInt(x).toFixed(0).toString();
//x=x.toString();
var lastThree = x.substring(x.length-3);
var otherNumbers = x.substring(0,x.length-3);
if(otherNumbers != '')
    lastThree = ',' + lastThree;
var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
//res='₹ '+res;
 return res;
}*/




//Accept Decimal
/*function CURINRCommaSep(x){
//x=parseFloat(x).toString();
var parts = x.toString().split(".");
x=parts[0];
//x=x.toString();
var lastThree = x.substring(x.length-3);
var otherNumbers = x.substring(0,x.length-3);
if(otherNumbers != '')
    lastThree = ',' + lastThree;
var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
//res='₹ '+res;

var Finl;
if(parts[1]!=undefined)
{
	Finl=res+"."+parts[1];
}
else
{
	Finl=res;
}
 return Finl;
}*/

function CURINRCommaSep(x){
	//x=parseFloat(x).toString();
	var parts = x.toString().split(".");
	x=parts[0];
	//x=x.toString();
	var Symple=x[0]
    if(Symple=="-")
    {
    	x=x.replace("-","")
    }
	var lastThree = x.substring(x.length-3);
	var otherNumbers = x.substring(0,x.length-3);
	if(otherNumbers != '')
	    lastThree = ',' + lastThree;
	var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
	//res='₹ '+res;

	var Finl;
	if(parts[1]!=undefined)
	{
		Finl=res+"."+parts[1];
	}
	else
	{
		Finl=res;
	}

	if(Symple=="-")
	{
		Finl=Symple+Finl
	}
	
	 return Finl;
	}

function GridClear(trclass, Tableid) {
    var whichtr = $('.' + trclass).closest("tr");

    whichtr.remove();
    $('#' + Tableid).hide();
}

// Compare Date
/*
function CompareDateFields(startDate, endDate) {

    var end = endDate.id;
    var startDate = startDate.value;
    //document.getElementById("#" +startDate).value;
    var endDate = endDate.value;
    //document.getElementById("#" + endDate).value;
    var one_day = 1000 * 60 * 60 * 24;
    var x = startDate.split("-");
    var y = endDate.split("-");
    var date1 = new Date(x[2], (x[1] - 1), x[0]);

    var date2 = new Date(y[2], (y[1] - 1), y[0])
    Diff = Math.ceil((date2.getTime() - date1.getTime()) / (one_day));
    if (Diff <= 1) {

        alertify.alert("End date is greater than Start  Date");

        return document.getElementById(end).value = "";
    }


}
*/





function ValidateDoc(XID,YID)
{
var x= XID;//document.getElementById('LCCR_DOBProof').value;
var y= YID.value;
if(x=='Passport'||x=='PASSPORT')
{
if(y != "")
{
if ((y.length >= 7) || (y.length <= 12))
{
var regsaid =/^([a-zA-Z]{1})(\d{6,11})$/;
if (y.search(regsaid) == -1)
{
//alertify.alert(LoadFrmXML("V0095")+'|'+XID.id);
YID.focus();
window.alert(LoadFrmXML("V0095"));
//document.getElementById('LCCR_DocNo').focus();
//document.getElementById('LCCR_DocNo').value="";
YID.value="";
}
}
else
   	  	{
//alertify.alert(LoadFrmXML("V0095")+'|'+XID.id);
window.alert(LoadFrmXML("V0095"));
//document.getElementById('LCCR_DocNo').focus();
//document.getElementById('LCCR_DocNo').value="";
YID.value="";
   	  	}
	}
} 
 
else if(x=='VOTER ID CARD'||x=='Voter Id')
{
	
	VoterID(YID);
	/* if(y != "")
	{
if (y.length >= 0)
{
var regsaid =/^([a-zA-Z]{3})(\d{7})$/;
if (y.search(regsaid) > 0) 
{
//alertify.alert(LoadFrmXML("V0096")+'|'+XID.id);
window.alert(LoadFrmXML("V0096"));
//document.getElementById('LCCR_DocNo').focus();
//document.getElementById('LCCR_DocNo').value="";
YID.value="";
}
}
else
{
//alertify.alert(LoadFrmXML("V0096")+'|'+XID.id);
window.alert(LoadFrmXML("V0096"));
//document.getElementById('LCCR_DocNo').focus();
//document.getElementById('LCCR_DocNo').value="";
YID.value="";
}
	} */
}
else if(x=='Aadhar'||x=='AADHAR')
 	{

	AadharValid(YID);

 	}
/*	
else  if(x=='Driving Lic')
{
	if(y != "")
	{
if(y.length<=16)
{
var regsaid =/^([a-zA-Z]{2})([0-9]{2})+\s([0-9]{11})$/;
if (y.search(regsaid) == -1) 
{
//alertify.alert(LoadFrmXML("V0098")+'|'+XID.id);
window.alert(LoadFrmXML("V0098"));
//document.getElementById('LCCR_DocNo').focus();
//document.getElementById('LCCR_DocNo').value="";
YID.value="";
}
}
else
{
//alertify.alert(LoadFrmXML("V0098")+'|'+XID.id);
window.alert(LoadFrmXML("V0098"));
//document.getElementById('LCCR_DocNo').focus();
//document.getElementById('LCCR_DocNo').value="";
YID.value="";
}
	}
}
*/

else if(x=='SSLC Certificate')
{
	if(y != "")
	{
if(y.length==7||y.length==6)
{
return true;
}
else
{
//alertify.alert(LoadFrmXML("V0099")+'|'+XID.id);
YID.focus();
window.alert(LoadFrmXML("V0099"));
//document.getElementById('LCCR_DocNo').focus();
//document.getElementById('LCCR_DocNo').value="";
YID.value="";
}
	}
}
else if(x=='PAN CARD'||x=='PAN Card')
{
	
	PanValid(YID); 
	
/*var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
if (y.search(panPat) == -1)
{
alertify.alert(LoadFrmXML("V0094"));
//document.getElementById('LCCR_DocNo').focus();
//document.getElementById('LCCR_DocNo').value="";
YID.value="";
return false;
}*/

}
else if(x=='RATION CARD'||x=='Ration Card')
{
	if(y != "")
	{
if ((y.length >= 7) )
{

if((y.length > 15))
{
	
YID.focus();
window.alert(LoadFrmXML("V0100"));
//document.getElementById('LCCR_DocNo').focus();
//document.getElementById('LCCR_DocNo').value="";
YID.value="";
}
//var regsaid =/^(\d{2})[-:/.]([a-zA-Z]{1})[-:/.](\d{7})$/;
/*if (y.search(regsaid) == -1)
{
//alertify.alert(LoadFrmXML("V0100")+'|'+XID.id);
window.alert(LoadFrmXML("V0100"));
//document.getElementById('LCCR_DocNo').focus();
YID.value="";
}*/
//window.alert(LoadFrmXML("V0100"));
//document.getElementById('LCCR_DocNo').focus();
//YID.value=""
}

else{
	YID.focus();
	window.alert(LoadFrmXML("V0100"));
//document.getElementById('LCCR_DocNo').focus();
//document.getElementById('LCCR_DocNo').value="";
YID.value="";
}
	}
}
else if(x=='Others')
{
	if(y != "")
	{
if(y.length<=20)
{
return true;
}
else
{
//alertify.alert(LoadFrmXML("V0089")+'|'+XID.id);
YID.focus();
window.alert(LoadFrmXML("V0089"));
//document.getElementById('LCCR_DocNo').focus();
//document.getElementById('LCCR_DocNo').value="";
YID.value="";
return false;
}
	}
}
else if( x=='BANK PASSBOOK')
{
	if(y != "")
	{
	if(y.length>=5 && y.length<=15)
	{
	return true;
	}
	else
	{
	//alertify.alert(LoadFrmXML("V0101")+'|'+XID.id);
	YID.focus();
	window.alert(LoadFrmXML("V0101"));
	//document.getElementById('LCCR_DocNo').focus();
	//document.getElementById('LCCR_DocNo').value="";
	YID.value="";
	return false;
	}
	}
	}
	
}


function AgeVal(XID,YID)
{	
if(XID.value!='')	
{	
var validdt=DateValid(XID);

if(validdt!="")
{
	var dob=XID.value;
    var res = dob.split("/");
    var day = res[0];
    var month = res[1];
    var year = res[2];
    dob=(month+'-'+day+'-'+year)
dob = new Date(dob);
var today = new Date();
var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
//$("#"+AGE).val(age);
	
//var dob=XID.value;

//var age=YID.value;

    //document.getElementById('Age').value = age;
	if(isNaN(age))
	{
		age ="0";
	}	
	
    if(age<18 || 85<age)
    	{
		 YID.value="";
		XID.value=""; 
    	// alertify.alert('Age Should be Greater than 18'+'|'+XID.id);
		  window.alert('Age Should between Greater than 18 to 85');
    	 //document.getElementById('LCCR_Age').value = '';	 
    	}
    else{
    	YID.value = age;
    	if(age != "")
    		{	
    		$(".AGE").addClass('active');
    		}
        }
}
}
}



// Ajax Loading Start
function ajaxindicatorstart(text)
	{
		if(jQuery('body').find('#resultLoading').attr('id') != 'resultLoading'){
		jQuery('body').append('<div id="resultLoading" style="display:none"><div><img src="ThemeproLO/Common/Images/ajax-loader.gif"><div>'+text+'</div></div><div class="bg"></div></div>');
		}
		
		jQuery('#resultLoading').css({
			'width':'100%',
			'height':'100%',
			'position':'fixed',
			'z-index':'10000000',
			'top':'0',
			'left':'0',
			'right':'0',
			'bottom':'0',
			'margin':'auto'
		});	
		
		jQuery('#resultLoading .bg').css({
			'background':'#000000',
			'opacity':'0.7',
			'width':'100%',
			'height':'100%',
			'position':'absolute',
			'top':'0'
		});
		
		jQuery('#resultLoading>div:first').css({
			'width': '250px',
			'height':'75px',
			'text-align': 'center',
			'position': 'fixed',
			'top':'0',
			'left':'0',
			'right':'0',
			'bottom':'0',
			'margin':'auto',
			'font-size':'16px',
			'z-index':'10',
			'color':'#ffffff'
			
		});

	    jQuery('#resultLoading .bg').height('100%');
        jQuery('#resultLoading').fadeIn(300);
	    jQuery('body').css('cursor', 'wait');
	}

	
	
	/*function ajaxindicatorstart1(text)
	{
		if(jQuery('body').find('#resultLoading1').attr('id') != 'resultLoading1'){
		jQuery('body').append('<div id="resultLoading1" style="display:none"><div><img src="ThemeproLO/Common/Images/ajax-loader.gif"><div>'+text+'</div></div><div class="bg"></div></div>');
		}
		
		jQuery('#resultLoading1').css({
			'width':'100%',
			'height':'100%',
			'position':'fixed',
			'z-index':'10000000',
			'top':'0',
			'left':'0',
			'right':'0',
			'bottom':'0',
			'margin':'auto'
		});	
		
		jQuery('#resultLoading1 .bg').css({
			'background':'#000000',
			'opacity':'0.7',
			'width':'100%',
			'height':'100%',
			'position':'absolute',
			'top':'0'
		});
		
		jQuery('#resultLoading1>div:first').css({
			'width': '250px',
			'height':'75px',
			'text-align': 'center',
			'position': 'fixed',
			'top':'0',
			'left':'0',
			'right':'0',
			'bottom':'0',
			'margin':'auto',
			'font-size':'16px',
			'z-index':'10',
			'color':'#ffffff'
			
		});

	    jQuery('#resultLoading1 .bg').height('100%');
        jQuery('#resultLoading1').fadeIn(300);
	    jQuery('body').css('cursor', 'wait');
	}
	
	
		function ajaxindicatorstop1()
	{
	    jQuery('#resultLoading1 .bg').height('100%');
        jQuery('#resultLoading1').fadeOut(1000);
	    jQuery('body').css('cursor', 'default');
		//jQuery("#resultLoading").remove();
	}*/
	
function ajaxindicatorstop()
	{
	    jQuery('#resultLoading .bg').height('100%');
        jQuery('#resultLoading').fadeOut(1000);
	    jQuery('body').css('cursor', 'default');
		//jQuery("#resultLoading").remove();
	}

	

	
  /*jQuery(document).ajaxStart(function () {
   		//show ajax indicator
		ajaxindicatorstart('loading data.. please wait..');
  }).ajaxStop(function () {
		//hide ajax indicator
		ajaxindicatorstop();
  });*/
// Ajax Loading End
/*
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
      ajaxindicatorstart("Loading.. Please wait")// document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
     ajaxindicatorstop();
  }
  
  
  
}*/

$(function() {
 /*		 
var _alert = window.alert;
var _confirm = window.confirm;

window.alert = function (msg) {
	//$.msgbox({type:'alert', content: msg});
	$.msgbox({type:'alert', content: msg.split('|')[0]});
	
};

window.confirm = function (msg) {

$.msgbox({type:'confirm', content: msg});	

};

window.error = function (msg) {

$.msgbox({type:'error', content: msg});	

};

window.info = function (msg) {

$.msgbox({type:'info', content: msg});	

};

window.success = function (msg) {

$.msgbox({type:'success', content: msg});	

};

window.Warning = function (msg) {

$.msgbox({type:'Warning', content: msg});	

};*/

	  $(document).on("keypress", "body", function(event) {
//$("body").keypress(function(event) {
	
	if(event.target.type !="textarea")
		{
	
	    if (event.which == 13) {
	        event.preventDefault();
			if($(".jMsgbox-ok").val() != undefined)
			{
	        $(".jMsgbox-ok").trigger("click");
			}
	    }
		
		}	
	});  
//jMsgbox-ok


 });

jQuery.fn.justtext = function() {
  
	return $(this)	.clone()
			.children()
			.remove()
			.end()
			.text();

};


 // Right Click Disable Start
 /*if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
           // alert("You've tried to open context menu"); //here you draw your own menu
            alertify.error("Right Click Disabled");
			e.preventDefault();
        }, false);
    } else {
        document.attachEvent('oncontextmenu', function() {
          //  alert("You've tried to open context menu");
		  alertify.error("Right Click Disabled");
            window.event.returnValue = false;
        });
    }
// Right Click Disable End*/

/*$(window).bind('beforeunload', function(){
  return 'Are you sure you want to leave?';
});*/

$(document).on('mousedown', '.tabdisable', function (event) {
	if(event.which == 1 ) { 
     // alert('Disabled Left mouse button!');
		event.returnValue = false;	
		$(this).off("click");
      return false; 
	  
    }
    if(event.which == 3 ) { 
      //alert('Disabled Right mouse button!'); 
	  event.returnValue = false;
      return false; 
    }
	 if(event.which== 2 ) {
     event.returnValue = false;
      return false; 
    }
	event.returnValue = false;
    return false; 
});


$(document).on('click', '.tabdisable', function (event) {
	if(event.which == 1 ) { 
     // alert('Disabled Left mouse button!'); 
	 event.returnValue = false;
//return false;
   // return false;
      return false; 
    }
    if(event.which == 3 ) { 
      //alert('Disabled Right mouse button!'); 
	 event.returnValue = false;
		//return false;
      return false; 
    }
	 if(event.which== 2 ) {
      //alert('Disabled Middle mouse button!'); 
	  event.returnValue = false;
      return false; 
    }
	event.returnValue = false;
    return false; 
});



$(document).on('keydown', '.tabdisable', function (event) {

	 if(event.which== 9 ) {
      //alert('Disabled Middle mouse button!'); 
	  event.returnValue = false;
      return false; 
    }
	event.returnValue = false;
    return false; 
});

  $(document).on('focus', '.tabdisable', function (event) {
	  
	  

	  
//	$('.gridDBfields').focus();
	//$(document).className('tabdisable')
	document.querySelector('.tabdisable').click();
	//$(document).find('form').removeClass("tabdisable");	
	//$(document).find('form').first().find('.gridDBfields').focus();
	 
	
});

$(document).on('focus', '.formtabdsbl', function (event) {
	 // alert('Disabled!'); 
	 event.returnValue = false;
		  return false;
	 	 
});




   jQuery(function($) { 
	   $(document).on("keyup", ".IsAddrFlds", function(e) {
    //$('.IsAddrFlds').keyup(function (e) {
	var id=$(this)
	
        if($(id).closest('td').prev('td').find('span').text()=='')
{
$(id).closest('td').prev('td').find('font').append(' <span> </span>')
}
var len=$(id).val().length

len=$(id).attr('maxlength')-len;
if(len < 0)
len=0


$(id).closest('td').prev('td').find('span').text('  (Max '+len+' Characters)')


    });
    });
	
	
	function MailAlrt(id)
{
if(Isvalid==true)
{
if($(id).val()=="" || $(id).val()=="NA")
{
for(i=0;i<=2;i++ )
{

alert("Enter the Valid Email!!")

}

$(id).removeClass('Mndtry')
$(id).closest('td').find('span').hide()
}

}
Isvalid=true

}

function AddrComRmv(id)
{

if($(id).val() !="")
{
var a=$(id).val();
var lastChar = a.slice(-1);

for(i=0;i<=lastChar.length;i++)
{
   if (lastChar == ',') {
          a = a.slice(0, -1);
		  
		  $(id).val(a);
		  if(a.slice(-1)==',')
		  {
		  i=0;
		  }
		  else{
			lastChar=""  
			  
		  }
        }
}
}


}


function ValidateGSTNo(Evnt)
{
	var GSTExp = /^([0-9]){2}([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}([0-9]){1}([a-zA-Z]){1}([0-9]){1}?$/;
	
	$(Evnt).val($(Evnt).val().toUpperCase());
	
	 var id = $(Evnt).attr('id');
	
	var Val = $(Evnt).val();
	
	Val=Val.toUpperCase();
	
	Val = Val.replace(/ /g,'');
	
	if (Val != "")
	{
	
    if (Val.length !=15) 
	{

		Evnt.focus();
        $(Evnt).val("");
        //alertify.alert(LoadFrmXML("V0097")+'|'+id);
		window.alert('Enter Valid GSTIN Number Eg: 22AAAAA1111A1A5');
    }
	else if(!GSTExp.test(Val)) 
	{
		Evnt.focus();
		$(Evnt).val("");
		window.alert('Enter Valid GSTIN Number Eg: 22AAAAA1111A1A5');
		return
	}
	else
	{
		if($('#CUCR_PAN').val() != "")
		{
		if(Val.substring(2, 12)!=$('#CUCR_PAN').val())
		{
		Evnt.focus();
		$(Evnt).val("");
		window.alert('Enter Valid GSTIN Number. GSTIN does not match with entered PAN No ' + $('#CUCR_PAN').val());
		}
		else
		{
			$(Evnt).val($(Evnt).val().toUpperCase());
		}
		}
		else
		{
			$('#CUCR_PAN').focus();
			$(Evnt).val("");
		window.alert('Enter the PAN No');
		}
		
	}

	}
	
}



function getFnYear(Fldid){
  
var min = new Date().getFullYear()-7,
    max = new Date().getFullYear(),
    select = document.getElementById(Fldid);



var mon=new Date().getMonth();

for (var i = min; i<max; i++){
    var opt = document.createElement('option');
    if(mon>2){
  opt.value = i+'-'+parseInt(i+1);
    opt.innerHTML = i+'-'+parseInt(i+1);
}
else
{
 opt.value = i+'-'+parseInt(i-1);
    opt.innerHTML = i+'-'+parseInt(i-1);
}
    select.appendChild(opt);

}

//select.value = new Date().getFullYear();

}


function getYear(Fldid){
  
var min = new Date().getFullYear()-10,
    max = new Date().getFullYear(),
    select = document.getElementById(Fldid);



var mon=new Date().getMonth();

for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
   
  opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);

}

//select.value = new Date().getFullYear();

}



function Add(param1,paramout)
{
var values=param1.split("|");
var i;
var Sum=0;
for(i=0;i<values.length;i++)
{

Sum=Sum+parseFloat($("#"+values[i]).val().replace(/,/g, "")!=''?($("#"+values[i]).val().replace(/,/g, "")):'0');
}	
Sum=Math.round(Sum * 100) / 100;
if(isNaN(Sum))
{
		Sum=0;
}
if(paramout!='')
$("#"+paramout).val(CURCommaSep(Sum));
else
return Sum;
}


function Diff(param1,paramout)
{
var values=param1.split("|");
var i;
var Sub=parseFloat($("#"+values[0]).val().replace(/,/g, "")!=''?($("#"+values[0]).val().replace(/,/g, "")):'0');
for(i=1;i<values.length;i++)
{
	Sub=Sub-parseFloat($("#"+values[i]).val().replace(/,/g, "")!=''?($("#"+values[i]).val().replace(/,/g, "")):'0');
}
Sub=Math.round(Sub * 100) / 100;
if(isNaN(Sub))
{
		Sub=0;
}	
if(paramout!='')
$("#"+paramout).val(CURCommaSep(Sub));
else
return Sub;
}


function Multi(param1,paramout)
{
var values=param1.split("|");
var i;
var Prod=1;
for(i=0;i<values.length;i++)
{
	Prod=Prod*parseFloat($("#"+values[i]).val().replace(/,/g, "")!=''?($("#"+values[i]).val().replace(/,/g, "")):'0');
}	
Prod=Math.round(Prod * 100) / 100;
if(isNaN(Prod))
{
		Prod=0;
}
if(paramout!='')
$("#"+paramout).val(CURCommaSep(Prod));
else
return Prod;
}


function Divide(param1,paramout)
{

	var values=param1.split("|");
	var i;
	var Div=parseFloat($("#"+values[0]).val().replace(/,/g, "")!=''?($("#"+values[0]).val().replace(/,/g, "")):'0');
	for(i=1;i<values.length;i++)
	{
		Div=Div/parseFloat($("#"+values[i]).val().replace(/,/g, "")!=''?($("#"+values[i]).val().replace(/,/g, "")):'0');
	}
	Div=Math.round(Div * 100) / 100;
	if((Div=='Infinity')||isNaN(Div))
	{
		Div=0;
	}
if(paramout!='')
$("#"+paramout).val(Div);
else
return Div;
}


//v3=Math.round(v3 * 100) / 100


//Suppy Chain Finance Common Function Start

function radiovalid(id){
	 
	 //var val1 = id.split('|');
	// var ListId =document.getElementsByClassName('check');
	 //var val1 = $("#"+val1[0]).closest('td').find('input[type="radio"]').val();
	 var ListId = $("#"+id.id).closest('td').find('input[type="radio"]');
	 for(var i = 0;i<ListId.length;i++){
		 if(ListId[i].id==id.id){
			 //var values = $('#'+val1[0]).val();
			 var values = $("#"+id.id).closest('td').find('input[type="radio"]')[i].title;
			 var val1 = $("#"+id.id).closest('td').find('input[type="hidden"]')[0];
			 $('#'+val1.id).val(values);
		 }
		 /*else{
			 $('#'+ListId[i].id).prop('checked', false);
		 }*/
			 
	 }
	 
}

function radiorestore(){
	 var ListId =document.getElementsByClassName('check');
	 var val1 = $("#"+ListId[0].id).closest('td').find('input[type="hidden"]').val(); 
	 for(var i = 0;i<ListId.length;i++){
		 if(val1==""){
			 $('#'+ListId[i].id).prop('checked', true);
			 //var val2 = $('#'+ListId[i].id).val();
			 var val2 = $("#"+ListId[i].id).closest('td').find('input[type="radio"]')[i].title;
			 $("#"+ListId[0].id).closest('td').find('input[type="hidden"]').val(val2);
			 i=100;
		 }
		 else{
			 if(ListId[i].title==val1){
				 $('#'+ListId[i].id).prop('checked', true);
			 }
			 else{
				 $('#'+ListId[i].id).prop('checked', false);
			}
		}
	 }
}

function checkvalue(text)
{

var x=$(text).closest('td').find('input[type="checkbox"]').length
   var fieldid = "";
for(i=0;i<x;i++)
{
 fieldid=$(text).closest('td').find('input[type="checkbox"]')[i].id;

 if($( '#'+fieldid).is(':checked')==true)
 {
  $('#'+fieldid).val('Y'); 
 }
 else if($( '#'+fieldid).is(':checked')==false)
 {
  $('#'+fieldid).val('N'); 
 }
}
}
//Suppy Chain Finance Common Function End



function DINValid(DIN){
var DINNO=$(DIN).val()
if(DINNO.length <8){ alert("Director Identification No Should be 8 digit")
$(DIN).val('');
return
}

if( parseInt(DINNO.substring(0, 1))!=0 ){ alert("Enter Valid Director Identification No")
$(DIN).val('');
return
}

var OPXML = UI_getdata(DINNO,"","","","","LSW_SPrmDirList");
	 
	 if($(OPXML).find('Result').text()!="")
	 {
		alert($(OPXML).find('Name').text()) 
	 }

}

function NonIndPanValid(Obj,Constitution) {
	if(Constitution=="Society" || Constitution=="Trustee")
	{
		Constitution=""
	}
	if(Constitution!="")
	{
	if(Constitution=='HUF')
		{
		    var code = /([H h])/;
			alert1='Invalid Pan No eg.AAAHA1111A'
        }
	else if(Constitution=='Partnership firms')
		{
		    var code = /([F f])/;
			alert1='Invalid Pan No eg.AAAFA1111A'	
        }
	else if(Constitution=='LLP')
	    {
	       var code = /([E e F f])/;
		   alert1='Invalid Pan No eg.AAAEA1111A/AAAFA1111A' 
        }
	else if(Constitution=='Proprietorship')
		{
		  var code = /([C c P p])/;
		  alert1='Invalid Pan No eg.AAACA1111A/AAAPA1111A'
		}
	else
		{
		  var code = /([C c])/;
		  alert1='Invalid Pan No eg.AAACA1111A'
        }
	}
     if (Obj == null) Obj = window.event.srcElement;
     if (Obj.value != "") {
         ObjVal = Obj.value;
         var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
       //  var code = /([C c])/;
         var code_chk = ObjVal.substring(3,4);
		 if(Constitution=="")
		 { 
          if (ObjVal.search(panPat) == -1) {
             alert('Invalid PAN Format');
             Obj.focus();
             Obj.value="";
             return false;
          }
		 }
		 else
		 {
			 if (ObjVal.search(panPat) == -1) {
             alert(alert1);
             Obj.focus();
             Obj.value="";
             return false;
         }
         if (code.test(code_chk) == false) {
             alert(alert1);
             Obj.value="";
             return false;
         }
		 }
     }
}

function yearsCompare(XID,YID,alert1)
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
	 $("#"+XID).val('');
	 $("#"+XID).next().removeClass('active');
     }
}
}
}


function ExpYearvalid(XID,YID)
{	
if(XID.value!='')	
{	
var validdt=DateValid(XID);

if(validdt!="")
{
var dob=XID.value;

var age=YID.value;
    date = new Date();
    var y = date.getFullYear();
    //var dob = document.getElementById('Did').value;
    var res = dob.split("/");
    var dd = res[0];
    var mm = res[1];
    var yy = res[2];
    var age = y-yy;
    //document.getElementById('Age').value = age;
	if(isNaN(age))
	{
		age ="0";
	}	
     YID.value = age;
    $(".AGE").addClass('active');
}
}
}

function inWords (num) {
	
	var a = ['','First ','Second ','Third ','Fourth ', 'Fifth ','Sixth ','Seventh ','Eighth ','Ninth ','Tenth ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
	var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

	
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
    return str;
}


$(document).on("change", ".IsPercentageSPL", function() {
	  //$('.IsIFSCFields').change(function () {	 	    
	  var Percentage=$(this).val()
	 if(Percentage!="") 
	 {
     if($.isNumeric(Percentage)==true)
	{
	if($("#DMY7").val().split('|')[0]!="Bill Discounting")
	{
	  if(Percentage<=Number(0) || Percentage>Number(100))
		  {
		  alert ('Percentage Should be Greater than 0 and Less than or equal to 100');
		  $(this).val('')
		  }
	 }
	}
	else
	{
		alert ('Kindly enter valid format');
		  $(this).val('')
	}
	 }
	 	});

$(document).on('change', '.IsPercentageFld', function () 
		{
	var Count=$(this).closest('.DYNROW').attr('data-row')
	var FiledId=$(this).attr("data-field").split("|")[0]
	var Type=$(this).attr("data-field").split("|")[1]
	var MultiRow=$(this).attr("data-field").split("|")[2]
	var FiledIdVal=$(this).val();
  if(FiledIdVal!="") 
	 {
     if($.isNumeric(FiledIdVal)==true)
	{
	if(FiledIdVal<=Number(0) || FiledIdVal>Number(100))
	{
	 //alert(Type+'Should be Greater than 0 and Less than 100')
	 alert(Type+' Should be Greater than 0 and Less than or equal to 100')
	 if(MultiRow =="Yes")
		{
		  $("#"+FiledId+Count).val('');
		}
	 else
		{
		  //$("#"+FiledId).val('');
		   $(this).val('')
		}
	}
	}
	else
	{
		alert ('Kindly enter valid format');
		  $(this).val('')
	}
	 }
	else
	{
		
	}
  })
  
  $(document).on('change', '.HalfIsPercentageFld', function () 
		{
	var Count=$(this).closest('.DYNROW').attr('data-row')
	var FiledId=$(this).attr("data-field").split("|")[0]
	var Type=$(this).attr("data-field").split("|")[1]
	var MultiRow=$(this).attr("data-field").split("|")[2]
	var FiledIdVal=$(this).val();

 if(FiledIdVal!="") 
	 {
     if($.isNumeric(FiledIdVal)==true)
	{
	if(FiledIdVal<=Number(0) || FiledIdVal>Number(50))
	{
	 alert(Type+' Should be Greater than 0 and Less than or equal to 50')
	 //alert(Type+'Should be Greater than 0 and Less than 50')
	 if(MultiRow =="Yes")
		{
		  $("#"+FiledId+Count).val('');
		}
	 else
		{
		  //$("#"+FiledId).val('');
		  $(this).val('')
		}
	}
	}
	else
	{
		alert ('Kindly enter valid format');
		  $(this).val('')
	}
	 }
	else
	{
		
	}
  })
  
 function timeSepValid(Evnt)  
{
	  if (Evnt.keyCode != 5) 
	  {
          if ($(Evnt).val().length == 2) {
              return $(Evnt).val() + ":";        
          }
           else
           {
        	   return $(Evnt).val();				
			}
      }	  
}


function CompareJointoDOB(XID,YID,ZID,Profile)
{
	
if(YID.value!='')	
{
if(XID.value!='')	
{	
var validdt=DateValid(XID);

if(validdt!="")
{
	var JOIN=XID.value;

	var DOB=YID.value;

	      date = new Date();
	    var y = date.getFullYear();
	    var JOIN1 = JOIN.split("/");
	    var dd = JOIN1[0];
	    var mm = JOIN1[1];
	    var yy = JOIN1[2];

	var JOINDATE=yy+mm+dd

	    var DOB1 = DOB.split("/");
	    var dd1 = DOB1[0];
	    var mm1 = DOB1[1];
	    var yy1 = DOB1[2];
	    var DOBIRTH=yy1+mm1+dd1
		
		if($("#"+Profile).val()=="Salaried")
		{
          if(parseInt(DOBIRTH)>parseInt(JOINDATE))
	    	{
	    	 window.alert('Joining date in present organisation should not greater than Date of Birth');
	    	 XID.value = "";
	    	 ZID.value = "";
	    	 return false;
	    	}
		}
}
}
}
}

// Special Characters Restrict Start//

	$(document).on("keypress", "input[type=text]", function(e) {

 var currentVal = e.key;
               re="~`#^&'|\"<>?~";
	
	if(re.indexOf(currentVal)!=-1)
        	{
        event.returnValue = false;
        return;
    }
    event.returnValue = true;
	 
    });	

	$(document).on("keypress", "textarea", function(e) {
	
	  var currentVal = e.key;
               re="~`#^&'|\"<>?~";
	
	if(re.indexOf(currentVal)!=-1)
        	{
        event.returnValue = false;
        return;
    }
    event.returnValue = true;
	 
    });	


	
		       $(document).on("blur", "input[type=text]", function() {
    	     var currentVal = $(this).val();
               re="~`#^&'|\"<>?~";
        
        for(var i=0;i<currentVal.length;i++)
        	{
        	 if(re.indexOf(currentVal.charAt(i))!=-1)
        	 {
        		alert("Mentioned special characters are not allowed ~`#^&'|\"<>?~")
        		$(this).val('')
        		$(this).next().removeClass('active')
    	        return
        	 }
        	 else
			 {
				var Data=$(this).val()
				//Data=Data.replace("–",'-');
				//.replace(/[_\s]/g, '-').replace(/[^a-z0-9\s]/gi, '-').replace(/[_\W]+/g, "-");
				$(this).val(Data);
			 }
        	}
    	     
          });
		  	  
		  	
		       $(document).on("blur", "textarea", function() {
    	     var currentVal = $(this).val();
             //  re="!~`@#$%^&*()+=-[]\\\';{}|\":<>?~_";
         re="~`#^&'|\"<>?~";
        for(var i=0;i<currentVal.length;i++)
        	{
        	if(re.indexOf(currentVal.charAt(i))!=-1)
        	{
        		alert("Mentioned special characters are not allowed ~`#^&'|\"<>?~")
        		$(this).val('')
        		$(this).next().removeClass('active')
    	        return
        	}
        	
        	}
    	     
    	     
          });
		  
		  
		  // Special Characters Restrict End//



  
  $(document).on("change", ".IsGreaterzeroFld", function() {
	  //$('.IsIFSCFields').change(function () {	 	    
	  var Percentage=$(this).val().replace(/,/g,'');
	 if(Percentage!="") 
	 {
     if($.isNumeric(Percentage)==true)
	{
	  if(Percentage<=Number(0) || Percentage==Number(0))
		  {
		  alert ('Enter the value Should be Greater than 0 ');
		  $(this).val('')
		  }
	}
	else
	{
		alert ('Kindly enter valid format');
		  $(this).val('')
	}
	 }
	 	});
		
		
		  
  $(document).on("change", ".IsGreaterThoundsFld", function() {
	  //$('.IsIFSCFields').change(function () {	 	    
	  var Percentage=$(this).val().replace(/,/g,'');
	 if(Percentage!="") 
	 {
     if($.isNumeric(Percentage)==true)
	{
	  if(Percentage<=Number(1000) || Percentage==Number(1000))
		  {
		  alert ('Enter the value Should be Greater than 1000 ');
		  $(this).val('')
		  }
	}
	else
	{
		alert ('Kindly enter valid format');
		  $(this).val('')
	}
	 }
	 	});
		
		
