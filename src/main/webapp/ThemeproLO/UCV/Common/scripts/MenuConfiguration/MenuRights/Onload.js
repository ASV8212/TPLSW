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

	 var data1 = $(".AssignDetails").html();
 var data2 = $(".DeleteDetails").html();

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

	   $(".AssignDetails").html(data1);
	 //$('.AssignDetails').find('input:text').val('');
	// $('.AssignDetails').find('select').val('Select');	 
  
	 

    });
    
    $(".DeleteTab").on("click", function () {
   	 $(".AssignDetails").hide();
   	
   	 $(".DeleteDetails").show();
	 

	   $(".DeleteDetails").html(data2);
	 //$('.DeleteDetails').find('input:text').val('');
	// $('.DeleteDetails').find('select').val('Select');	
	 
	 

   });
    
    //var param1 = "ProcessID=" + ProcessID;

    $('#Select').on("change", function () {
        $(".level0").hide();
    });

    $('#MenuName').on("change", function () {

        $('#MenuLevelOne').val('');
        $('#MenuLevelTwo').val('');

    });

    $('#DelMenuName').on("change", function () {

        $('#DelMenuLevelOne').val('');
        $('#DelMenuLevelTwo').val('');

    });

    $('#MenuLevelOne').on("change", function () {


        $('#MenuLevelTwo').val('');

    });

    $('#DelMenuLevelOne').on("change", function () {


        $('#DelMenuLevelTwo').val('');

    });

    $('#Menulevel').on("change", function () {

        if (document.getElementById("Menulevel").value == "0") {
           
            $('#MenuName').addClass('ISDBMndtry');
            $('#MenuLevelOne').removeClass('ISDBMndtry');
            $('#MenuLevelTwo').removeClass('ISDBMndtry');
        }
        else if (document.getElementById("Menulevel").value == "1") {
            $('#MenuName').addClass('ISDBMndtry');
            $('#MenuLevelOne').addClass('ISDBMndtry');
            $('#MenuLevelTwo').removeClass('ISDBMndtry');
        }

        else {
            $('#MenuName').addClass('ISDBMndtry');
            $('#MenuLevelOne').addClass('ISDBMndtry');
            $('#MenuLevelTwo').addClass('ISDBMndtry');

        }

    });


    $('#DelMenulevel').on("change", function () {

        if (document.getElementById("DelMenulevel").value == "0") {
            $('#DelMenuName').addClass('ISDBMndtryDel');
            $('#DelMenuLevelOne').removeClass('ISDBMndtryDel');
            $('#DelMenuLevelTwo').removeClass('ISDBMndtryDel');
           
        }
        else if (document.getElementById("DelMenulevel").value == "1") {
            $('#DelMenuName').addClass('ISDBMndtryDel');
            $('#DelMenuLevelOne').addClass('ISDBMndtryDel');
            $('#DelMenuLevelTwo').removeClass('ISDBMndtryDel');
           
        }

        else {
            $('#DelMenuName').addClass('ISDBMndtryDel');
            $('#DelMenuLevelOne').addClass('ISDBMndtryDel');
            $('#DelMenuLevelTwo').addClass('ISDBMndtryDel');
           

        }

    });


    $(function () {

        $("#Queuesrefresh").on("click", function () {

            var x = $("ul li.active").index();
            var id = $("ul li.active").attr('id');
            $("#" + id).trigger("click");

        });
    });





    });

   
	
    





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

	for(var i=0;i<data1.split('|').length-1;i++)
	{
		
		if(data1.split('|')[i].split(',')[0]==undefined)
		{
			
			var error='';
			
		}
		else{
			 id += data1.split('|')[i].split(',')[0]+"|";
		}
		
		
	}


            // DateChange("ISDatefield");

			

            //    var AddrXML = Gridsubmitdata_m("TableTimest", "ISGridDBfields", "9")
            //    AssignGridXmltoField("SAL_Detls", AddrXML);
			$("#SetRightsID").val(id.slice(0,-1));
            var param1 = document.getElementById('MenuID').value;
            var setrightsid=document.getElementById('SetRightsID').value;
            var FORMXML = submitdata("ISDBfields");
            var levelcount = document.getElementById('Menulevel').value;
            //alert(FORMXML);
	
			

            $.ajax({

                url: "/ThemePro_LSW/UI_formdatains_NewMENURIGHTSEnt",
                data: { xml: FORMXML, param1: param1, setrightsid: setrightsid, levelcount: levelcount },
                async: false,
               // dataType: "json",
                type: 'POST',
                success: function OnSuccess_submit(data) {
					
					
					window.alert(LoadFrmXML("V0106"));
					//window.alert(data.replace(/,/g, "\r\n"));
					
						$("#Table3_wrapper").hide();
					$("#Rgtsgridviewlevel").trigger("click");
					

                     /* $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                    $('#Menulevel').val('');
                    Clearfields();
                   
                }

            );*/
  
                },
                error: function OnError_submit(xmlRequest) {
				window.alert(LoadFrmXML("V0075"));
                }

            });

			

  

    }
	