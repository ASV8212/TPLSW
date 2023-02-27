 
$(document).on('click', '#attachview', function () {

	var IOP=window.location.origin;

	 var Prfx="TEST_";
	 
	 //var hidnvalue= "Aadharcard~D:\Srinivash\Project\0014_Home_Loan_HomeLoan\LSW_Demo\Aadharcard\medsave claim intimation.pdf|";
		  
	  RedirectURL = IOP+"ThemeproLO/Attachment.jsp?Prfx="+Prfx;

	   window.open(RedirectURL, '_blank','toolbar=no,resizable=yes,location=0');

	   // formname=&pre=BCDT&hidnvalue=','popup','width=600,height=600');
	   
	   //return false;">


});
 

$(document).on('click', '#upload', function () {

	
	DeleteAttchDirData("TEST_");

});
 
function DeleteAttchDirData(Prfx)
{
	var Insattchdata=$("#"+Prfx+"Attch").val();
	 var delattchdata=$("#"+Prfx+"delAttch").val();
		
	 $.ajax({
	        url:"ThemeproLO/deletefile?Insattchdata="+Insattchdata+"&delattchdata="+delattchdata,
	        //data: fd,
	        contentType: false,
	        processData: false,
	        type: 'POST',
	        success: function(data){
	        	
	        	window.alert(data);
	        },
	        failure:function(data)
	        {
	        	//alertify.alert("Delete Failed");
				//alertify.alert(LoadFrmXML("V0115"));
				window.alert(LoadFrmXML("V0115"));
	        	
	        }
	    });
}