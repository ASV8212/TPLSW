$(document).ready(function () {

var IOP=window.location.origin+'/'+LoadFrmXML("PG001");

		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= IOP;	
			return;
			}
			
					 var Resultval=FormRights();
	  if(Resultval!='Yes')
	 {
	 return;
	 }
			
			
    readonly();
   // var loggedinuser = getUrlParam("username");
   // var ProcessID = getUrlParam("processId");
   // var activityId = getUrlParam("activityId");

    //var securityname123 = "#currentUser.firstName#";
    //alert(securityname123);

  //  $(".AssignDetails").show();
	
	// $(".DeleteDetails").hide();

    
    
    $(".AssignTab").on("click", function () {
    	 $(".AssignDetails").show();
    	
    	 $(".DeleteDetails").hide();

    });
    
    $(".DeleteTab").on("click", function () {
   	 $(".AssignDetails").hide();
   	
   	 $(".DeleteDetails").show();

   });
    
    //var param1 = "ProcessID=" + ProcessID;

   



    $('#ASSIGN').click(function () {

       
    	var chkmndtry = ChkMandatoryFields("ISDBMndtry");
        if (chkmndtry == "No") {
            return;
        }
            //Check Grid MAndatory Fields
            // END Check Grid MAndatory Fields

//            if (document.getElementById("AssignRights").value == "Everyone" && document.getElementById("AssignForAllSubLevels").value != "Yes") {

//                alert('Choose "Yes", In Assign For All SubLevels');
//                return;

//            }



            var Stage = "ENTRY"




            // DateChange("ISDatefield");


            //    var AddrXML = Gridsubmitdata_m("TableTimest", "ISGridDBfields", "9")
            //    AssignGridXmltoField("SAL_Detls", AddrXML);

           // var param1 = document.getElementById('MenuID').value;
          //  var setrightsid = document.getElementById('SetRightsID').value;
            var FORMXML = submitdata("ISDBfields");
            var Code ='Assign';
            //alert(FORMXML);


            $.ajax({

                url: "/ThemePro_LSW/UI_formdatainsQueueRights",
                data: { xml: FORMXML, Code: Code },
                async: false,
               // dataType: "json",
                type: 'POST',
                success: function OnSuccess_submit(data) {


                    if (data == 'Success') {

                        //alertify.alert("Assigned Rights");
						window.alert(LoadFrmXML("V0139"));
                                         
                        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                   
                    //Clearfields();
                   
                }

            );
                        
                        var levelselect = document.getElementById('RightsType').value

                        if (levelselect != '') {

                            document.getElementById('RightsType').value = ''

                        }


                    }
                    else {
                        window.alert(data);

                    }
                },
                error: function OnError_submit(xmlRequest) {

                }

            });



  

    });



    $('#DELETE').click(function () {
    	
    	//$('#WFName').removeClass('ISDBMndtry');


    	var chkmndtry = ChkMandatoryFields("ISDBMndtryDel");
        if (chkmndtry == "No") {
            return;
        }

            //Check Grid MAndatory Fields
            // END Check Grid MAndatory Fields

         


            var Stage = "ENTRY"




            // DateChange("ISDatefield");


            //    var AddrXML = Gridsubmitdata_m("TableTimest", "ISGridDBfields", "9")
            //    AssignGridXmltoField("SAL_Detls", AddrXML);

          //  var param1 = document.getElementById('DelMenuID').value;
          //  var setrightsid = document.getElementById('DelSetRightsID').value;
            var FORMXML = submitdata("ISDBfields");
            var Code = "Delete";
            //alert(FORMXML);


            $.ajax({

                url: "/ThemePro_LSW/UI_formdatainsQueueRights",
                data: { xml: FORMXML, Code: Code},
                async: false,
               // dataType: "json",
                type: 'POST',
                success: function OnSuccess_submit(data) {


                    if (data == 'Success') {

                        //alertify.alert("Rights has been removed");
                       window.alert(LoadFrmXML("V0140"));
                        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                   

                }

            );
                        var levelselect = document.getElementById('DelRightsType').value

                        if (levelselect != '') {

                            document.getElementById('DelRightsType').value = ''

                        }


                    }
                    else {
                        window.alert(data);

                    }
                },
                error: function OnError_submit(xmlRequest) {

                }

            });



    

    });


});

function clrtxtWF()
{

document.getElementById('QueueName').value = '';
document.getElementById('RightsType').value = '';
document.getElementById('Rights').value = '';


}

function clrtxtsel()
{

document.getElementById('Rights').value = '';



}
function clrtxtQName()
{

document.getElementById('Rights').value = '';
document.getElementById('RightsType').value = '';


}


function ChkValues(data1)
	{

       
            var chkmndtry = ChkMandatoryFields("ISDBMndtry");


            if (chkmndtry == "No") {
                return;
            }

            //Check Grid MAndatory Fields
            // END Check Grid MAndatory Fields

//            if (document.getElementById("AssignRights").value == "Everyone" && document.getElementById("AssignForAllSubLevels").value != "Yes") {

//                alert('Choose "Yes", In Assign For All SubLevels');
//                return;

//            }



            var Stage = "ENTRY"
			
			var id="";

	for(var i=0;i<data1.split('|').length;i++)
	{
		
		if(data1.split('|')[i].split(',')[1]==undefined)
		{
			
			var error='';
			
		}
		else{
			 id += data1.split('|')[i].split(',')[1]+"|";
		}
		
		
	}


            // DateChange("ISDatefield");

			

			$("#Rights").val(id.slice(0,-1));
             
            var setrightsid=document.getElementById('Rights').value;
		 
            var FORMXML = submitdata("ISDBfields");
			
			 var Code ='Assign';
           
	
			

            $.ajax({

                url: "/ThemePro_LSW/UI_formdatainsQueueRights",
                data: { xml: FORMXML, Code: Code },
                async: false,
               // dataType: "json",
                type: 'POST',
                success: function OnSuccess_submit(data) {
					
					
					
					window.alert(LoadFrmXML("V0106"));

					$("#Table3_wrapper").hide();
				
					$("#AsgnQuegrid").trigger("click");
					

                     /* $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                    $('#Menulevel').val('');
                    Clearfields();
                   
                }

            );*/
			
			 var levelselect = document.getElementById('RightsType').value

                        if (levelselect != '') {

                            document.getElementById('RightsType').value = ''

                        }
						 
                    else {
                        //alertify.alert(data);
						window.alert(LoadFrmXML("V0106"));

                    }
  
                },
                error: function OnError_submit(xmlRequest) {
				window.alert(LoadFrmXML("V0075"));

                }

            });

			

  

    }