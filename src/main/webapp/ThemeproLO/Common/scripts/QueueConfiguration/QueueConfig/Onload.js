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

    $(".NewTab").on("click", function () {

        //$(".rearrhide").show();
        $("#Rearrange").hide();
        $(".ShowNewQueue").show();
        $(".EditDetails").hide();
       // $('#New_MenuName').removeClass('ISDBMndtry');
        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
       
       

    });
    $(".Edit").on("click", function () {
   $(".wfnmlkup").hide();
        $("#Rearrange").hide();
        $(".EditDetails").show();
        $(".ShowNewQueue").hide();
        $('#EditQIconRight').empty();
    	$('#EditQIcons').empty();
    	$('#EditQIconLeft').empty();
        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );

    });
    $(".rearrange").on("click", function () {
        $("#Rearrange").show();
        $(".EditDetails").hide();
        $(".ShowNewQueue").hide();
        $(".rearrhide").hide();
     /*   if (document.getElementById('ReMenuLevel').value == '') 
        {
            $("#SubRemenuName").empty();
            $(".EditDetails").hide();
            $(".ShowNewQueue").hide();
            $(".rearrhide").hide();
            }*/
       // listbox_selectall('RemenuName', true);
      fetchWFName();
    });



    //start
    $("#up").on("click", function () {
        listbox_move('ReQueueName', 'up');
        //alert("ok");
    });
    $("#down").on("click", function () {
        listbox_move('ReQueueName', 'down');
        //alert("ok");
    });
    //end
    //start
    $("#Qup").on("click", function () {
        listbox_move('QIconRight', 'up');
        //alert("ok");
    });
    $("#Qdown").on("click", function () {
        listbox_move('QIconRight', 'down');
        //alert("ok");
    });
    //end
    $("#Qleft").bind("click", function () {
        var options = $("[id*=QIconRight] option:selected");
        for (var i = 0; i < options.length; i++) {
            var opt = $(options[i]).clone();
            $(options[i]).remove();
            $("[id*=QIconLeft]").append(opt);
           
        }
    });
    $("#Qright").bind("click", function () {
        var options = $("[id*=QIconLeft] option:selected");
        for (var i = 0; i < options.length; i++) {
            var opt = $(options[i]).clone();
            $(options[i]).remove();
            $("[id*=QIconRight]").append(opt);
          
        }
    });

    $("#EditQup").on("click", function () {
        listbox_move('EditQIconRight', 'up');
        //alert("ok");
    });
    $("#EditQdown").on("click", function () {
        listbox_move('EditQIconRight', 'down');
        //alert("ok");
    });
    //end
    $("#EditQleft").bind("click", function () {
        var options = $("[id*=EditQIconRight] option:selected");
        for (var i = 0; i < options.length; i++) {
            var opt = $(options[i]).clone();
            $(options[i]).remove();
            $("[id*=EditQIconLeft]").append(opt);
           
        }
    });
    $("#EditQright").bind("click", function () {
        var options = $("[id*=EditQIconLeft] option:selected");
        for (var i = 0; i < options.length; i++) {
            var opt = $(options[i]).clone();
            $(options[i]).remove();
            $("[id*=EditQIconRight]").append(opt);
          
        }
    });



    $('#save').click(function () {
    	
        

            // document.getElementById('Chksave').value = "save";
            var chkmndtry = ChkMandatoryFields("ISDBMndtry");
            if (chkmndtry == "No") {
                return;
            }
            getQIconValue('QIconRight','QIcons');
var param="New";
            var FORMXML = submitdata("ISDBfields");

//alert(FORMXML);
            $.ajax({
            	//UI_formdatains_NewMenuEntry
            	
                url: "/ThemePro_LSW/UI_formdatainsInsertQueue",
                data: { xml: FORMXML,param:param },
                async:false,
           type:"Post",
                success : function OnSuccess_submit(Result) {
                	
                	//alert(Result);
                    if (Result == 'Success') {
                       
                       // alertify.alert(" Data Saved");
						window.alert(LoadFrmXML("V0108"));
                        window.location.reload();
                      /*  $('#QIconRight').empty();
                        $('#QIconLeft').empty();
                        $('#QIcons').empty();
  $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }
                
               
            );
  QIconLeftOption();
*/
                    }
                    else {
                        // DateChangeBack("ISDatefield");
                       // alertify.alert("Queue name already Exsist ");
						window.alert(LoadFrmXML("V0138"));
                        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
                       
                        
                    }
                },
                error: function OnError_submit(xmlRequest) {
                    //DateChangeBack("ISDatefield");
					window.alert(LoadFrmXML("V0075"));
                   // alertify.alert("Submission Failed");

                }
            });

   

    });
    $('#UpdateBtn').click(function () {

        
        
        
        var chkmndtry = ChkMandatoryFields("ISDBMndtryedit");
        if (chkmndtry == "No") {
            return;
        }
        getQIconValue('EditQIconRight','EditQIcons');
        var FORMXML = submitdata("ISDBfields");

        var param = "Update";

        $.ajax({

            url: "/ThemePro_LSW/UI_formdatainsInsertQueue",
            data: { xml: FORMXML, param: param },
            async:false,
            type: 'POST',
            success: function OnSuccess_submit(data) {
                if (data == 'Success') {
				    window.alert(LoadFrmXML("V0108"));
                	//alertify.alert("Data saved");
                	$('#EditQIconRight').empty();
                	$('#EditQIcons').empty();
                	$('#EditQIconLeft').empty();
                	
                    $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
                   
                    
                    //$("#Tab2").trigger("click");

                }
                else {
                   // alertify.alert("Queue Name already exsist");
					window.alert(LoadFrmXML("V0138"));
                    $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
                    

                    
                }
            },
            error: function OnError_submit(xmlRequest) {
                //DateChangeBack("ISDatefield");
                //GridDateChangeBack_m("TablerescADD", "ISDatefields", "2");
				window.alert(LoadFrmXML("V0075"));
               // alertify.alert("Submission Failed");

            }
        });
    });


    $('#DeleteBtn').click(function () {
    	var chkmndtry = ChkMandatoryFields("ISDBMndtryedit");
        if (chkmndtry == "No") {
            return;
        }

        var FORMXML = submitdata("ISDBfields");

        var param = "Delete";

        $.ajax({

            url: "/ThemePro_LSW/UI_formdatainsInsertQueue",
            data: { xml: FORMXML, param: param },
            async:false,
            type: 'POST',
            success: function OnSuccess_submit(data) {
                if (data == 'Success') {
					window.alert(LoadFrmXML("V0109"));
                	//alertify.alert("Data Deleted");
                    $("#Tab2").trigger("click");
                    $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
                    
                    
                }
                else {
                    //alertify.alert("Insertion Failed");
					window.alert(LoadFrmXML("V0085"));

                }
            },
            error: function OnError_submit(xmlRequest) {
				window.alert(LoadFrmXML("V0075"));
               // alertify.alert("Submission Failed");

            }
        });
    });
    $('#RearrSubmit').click(function () {
       
        //listbox_selectall('RemenuName', true);
        getValue();
        //var XmlTxt = getValue();
        var FromLBVal = document.getElementById('FromLBValue').value;
        var XmlTxt = submitdata("ISDBfields");
     
       
        $.ajax({
            url: "/ThemePro_LSW/UI_formdatainsInsertRearrangedQueue",
            data: { xml: XmlTxt },
            async: false,
           // dataType: "json",
            type: 'POST',
            success: function OnSuccess_submit(data) {
                if (data == 'Success') {

                   // $("#Tab3").trigger("click");
                   
                    //alertify.alert("Data Saved");
					window.alert(LoadFrmXML("V0108"));
                    document.getElementById('ReWorkFlowName').value = '';
                    $("#ReQueueName").empty();
                    $("#FromLBValue").empty(); 
                 
                }
               
            },
            error: function OnError_submit(xmlRequest) {
			window.alert(LoadFrmXML("V0075"));
                //alertify.alert("Submission Failed");

            }
    });
    });
});

function clrtxtWF()
{

document.getElementById('QueueName').value = '';

}

