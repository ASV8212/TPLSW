$(document).ready(function () {
var IOP=window.location.origin+'/jw';
 
 
SessionStChk();
if (document.getElementById("SubmitSuccess").value=="InValid")
{	
window.location= IOP+"/web/login";	
return;
}
 var loggedinuser = getUrlParam("username");
 
 document.getElementById("LoggedInUser").value=loggedinuser;
 $(".DateFields").cdatepicker({
        showOn: "button",
        buttonImage: "ThemeproLO/Common/Images/calendar.png",
        buttonImageOnly: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy",
        yearRange: "c-10:c+10"
    });

 
 $('#save').click(function () {
       
        //listbox_selectall('RemenuName', true);
       // getValue();
        //var XmlTxt = getValue();
       // var FromLBVal = document.getElementById('FromLBValue').value;
	 var chkmndtry = ChkMandatory("Mndtry");


     if (chkmndtry == "No") {
         return;
     }
        var XmlTxt = submitdata("DBfields");
     
       // alert(XmlTxt);
        $.ajax({
            url: "/ThemePro_LSW/UI_formdatains_DesignateUser",
            data: { xml: XmlTxt },
            async: false,
           // dataType: "json",
            type: 'POST',
            success: function OnSuccess_submit(data) {
                if (data == 'Success') {

                   // $("#Tab3").trigger("click");
                   
                   
					window.alert(LoadFrmXML("V0108"));
                    document.getElementById('Designation').value = '';
                    document.getElementById('StartDate').value = '';
                    document.getElementById('EndDate').value = '';
                 
                }
               
            },
            error: function OnError_submit(xmlRequest) {
					window.alert(LoadFrmXML("V0075"));
                //window.alert("Submission Failed");

            }
    });
    });
});