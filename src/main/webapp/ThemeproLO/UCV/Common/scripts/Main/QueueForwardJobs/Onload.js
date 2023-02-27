$(document).ready(function(){
	
	 var IOP=window.location.origin+'/jw';
	 
	 var Rdpage = LoadFrmXML("PG001");
		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= Rdpage;	
			return;
			}
			
					 var Resultval=FormRights();
	  if(Resultval!='Yes')
	 {
	 return;
	 }
//	var ProcessID = getUrlParam("id");
   //  var activityId = getUrlParam("activityID");

	 $('#ASSIGN').click(function () {
		// alert("hi")
		  var chkmndtry = ChkMandatoryFields("ISDBMndtry");

	 var IOP=window.location.origin+'/jw';
         if (chkmndtry == "No") {
              return;
          }
          var Level = document.getElementById('Level').value;
          var AssignRights = document.getElementById('AssignRights').value +'|'+GetCurrentUser();
          var ProcessID = getUrlParam("id");
          var activityId = getUrlParam("activityID");

		/*var AssgnURL =   IOP+"/web/json/monitoring/activity/reassign?activityId="+activityId+"&username="+AssignRights+"&replaceUser="+AssignRights
		  
		  	$.ajax({
                 type: 'POST',
                 url: AssgnURL,
                // data: params,
                 dataType : "text",
				 async:false,
                 xhrFields: {
                     withCredentials: true
                 },
                 success: function(data) {
                     OP="Accepted";
                 },
                 error: function(data) {
                     try {
                         // do nothing for now
                        // if (callback.error) {
                          //   callback.error.call(thisWindow, data);
						  	//alertify.alert(LoadFrmXML("V0127"));
								window.alert(LoadFrmXML("V0127"));
						  //alertify.alert('Error: File not Accepted');
                        // }
                     }
                     catch (e) {}
                 }
               });*/
		  
          $.ajax({

              url: "/ThemePro_LSW/UI_formdata_GetQueueForwardJobs",
              data: { ProcessID: ProcessID, activityId: activityId, AssignRights: AssignRights,Level: Level},
              async: false,
             // dataType: "json",
              type: 'POST',
              success: function OnSuccess_submit(data) {


               

                 window.alert(data);
        

   $('.inputTXT').empty();
                  
              },
              error: function OnError_submit(xmlRequest) {

              }

          });
    });
	/* $('#Cancel').click(function () {
		 window.close();
	  });*/
	ajaxindicatorstop();
})
 

function Close_window()
{ 

alertify.confirm("Close Window?", function (e) {
    if (e) {
		
	$(parent.document.getElementById(frameElement.id)).parents().find('.active').find('.closetab').click();
    } else {
        // user clicked "cancel"
		return;
    }
});

/*
 if (confirm("Close Window?"))
	{
	
	}*/
}

