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

        $(".rearrhide").show();
        $("#Rearrange").hide();
        $(".ShowNewMenu").show();
        $(".EditDetails").hide();
        $('#New_MenuName').removeClass('ISDBMndtry');
        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
        var editMenuFunction = document.getElementById('editMenuFunction').value

        if (editMenuFunction != '') {

            document.getElementById('editMenuFunction').value = '';

        }
        var editMenuLevel = document.getElementById('editMenuLevel').value

        if (editMenuLevel != '') {

            document.getElementById('editMenuLevel').value = '';
            $('.MainShow').hide();
            $('.SubShowlevel1').hide();
            $('.SubShowlevel2').hide();
        }
        var levelselect = document.getElementById('Menulevel').value

        if (levelselect != '') {

            document.getElementById('Menulevel').value = ''
            $('.find1').hide();
            $('.find2').hide();
        }

        var select = document.getElementById('MenuFunction').value

        if (select != '') {

            document.getElementById('MenuFunction').value = ''

        }

        var queue = document.getElementById('MenuFunction').value;
        if (queue != 'Queue Page') {

            $('.QueueShow').hide();
            $('#Qparamlookup').show();
            $('#QueueParam').addClass('ISDBMndtry');
            
        }

        else {

            $('.QueueShow').show();
            $('#Qparamlookup').hide();
            $('#QueueParam').removeClass('ISDBMndtry');
        }

    });
    $(".Edit").on("click", function () {
        $(".rearrhide").show();
        $("#Rearrange").hide();
        $(".EditDetails").show();
        $(".ShowNewMenu").hide();
        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );

        var editMenuFunction = document.getElementById('editMenuFunction').value

        if (editMenuFunction != '') {

            document.getElementById('editMenuFunction').value = '';

        }
        var editMenuLevel = document.getElementById('editMenuLevel').value

        if (editMenuLevel != '') {

            document.getElementById('editMenuLevel').value = '';
            $('.MainShow').hide();
            $('.SubShowlevel1').hide();
            $('.SubShowlevel2').hide();
        }
        var levelselect = document.getElementById('Menulevel').value

        if (levelselect != '') {

            document.getElementById('Menulevel').value = ''
            $('.find1').hide();
            $('.find2').hide();
        }

        var select = document.getElementById('MenuFunction').value

        if (select != '') {

            document.getElementById('MenuFunction').value = ''

        }
        
        
        
        var editqueue = document.getElementById('editMenuFunction').value;
        if (editqueue != 'Queue Page') {

            $('.EditQueueShow').hide();
            $('#editQparamlookup').show();
            
        }

        else {

            $('.EditQueueShow').show();
            $('#editQparamlookup').hide();
        }
        
    });
    $(".rearrange").on("click", function () {
        $("#Rearrange").show();
        $(".EditDetails").hide();
        $(".ShowNewMenu").hide();
        $(".rearrhide").hide();
        if (document.getElementById('ReMenuLevel').value == '') 
        {
            $("#SubRemenuName").empty();
            $(".EditDetails").hide();
            $(".ShowNewMenu").hide();
            $(".rearrhide").hide();
            }
       // listbox_selectall('RemenuName', true);
    });



    //start
    $("#up").on("click", function () {
        listbox_move('RemenuName', 'up');
        //alert("ok");
    });
    $("#down").on("click", function () {
        listbox_move('RemenuName', 'down');
        //alert("ok");
    });
    //end
    $("#Main").on("click", function () {
        $('.QueueShow').hide();
        $('.EditQueueShow').hide();

        document.getElementById('EntryTYPE').value = "Main";
        $('.level').hide();
        $('.find1').hide();
        $('.find2').hide();
      

        $('.levelhide').show();

        $(".MainShow").show();
        $(".sublevel").hide();
        $(".SubShowlevel1").hide();
        $(".SubShowlevel2").hide();

        $('#MenuName').addClass('ISDBMndtry');
        $('#Menulevel').removeClass('ISDBMndtry');
        $('#SubMenuName').removeClass('ISDBMndtry');
        $('#MainMENU').removeClass('ISDBMndtry');
        $('#New_MenuName').removeClass('ISDBMndtry');
        $('#QueueParam').removeClass('ISDBMndtry');

        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
        var editMenuFunction = document.getElementById('editMenuFunction').value

        if (editMenuFunction != '') {

            document.getElementById('editMenuFunction').value = '';

        }
        var editMenuLevel = document.getElementById('editMenuLevel').value

        if (editMenuLevel != '') {

            document.getElementById('editMenuLevel').value = '';
            $('.MainShow').hide();
            $('.SubShowlevel1').hide();
            $('.SubShowlevel2').hide();
        }
        var levelselect = document.getElementById('Menulevel').value

        if (levelselect != '') {

            document.getElementById('Menulevel').value = ''
            $('.find1').hide();
            $('.find2').hide();
        }

        var select = document.getElementById('MenuFunction').value

        if (select != '') {

            document.getElementById('MenuFunction').value = ''

        }


       
    });

    $("#Sub").on("click", function () {

        document.getElementById('EntryTYPE').value = "Sub";
        $('.level').show();
        $('.levelhide').hide();
        $('#MenuName').removeClass('ISDBMndtry');
        $('#MenuName').removeClass('ISDBfields');
        $('.MainShow').hide();
        $('.SubShowlevel1').hide();
        $('.SubShowlevel2').hide();
        $('.QueueShow').hide();
        $('.EditQueueShow').hide();

        $(".sublevel").show();
        var editMenuFunction = document.getElementById('editMenuFunction').value

        if (editMenuFunction != '') {

            document.getElementById('editMenuFunction').value = '';

        }
        var editMenuLevel = document.getElementById('editMenuLevel').value

        if (editMenuLevel != '') {

            document.getElementById('editMenuLevel').value = '';
            $('.MainShow').hide();
            $('.SubShowlevel1').hide();
            $('.SubShowlevel2').hide();
        }
        var levelselect = document.getElementById('Menulevel').value

        if (levelselect != '') {

            document.getElementById('Menulevel').value = ''
            $('.find1').hide();
            $('.find2').hide();
        }

        var select = document.getElementById('MenuFunction').value

        if (select != '') {

            document.getElementById('MenuFunction').value = ''

        }

        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
    });


    if (document.getElementById('EntryTYPE').value == "Main") {
        $("#Main").trigger("click");
    }
    if (document.getElementById('EntryTYPE').value == "Sub") {
        $("#Sub").trigger("click");
    }



    $('#save').click(function () {
        $('#editMenuLevel').removeClass('ISDBMndtry');
        $('#editMenuName').removeClass('ISDBMndtry');
        $('#editQueueParam').removeClass('ISDBMndtry');
       
        if (document.getElementById('EntryTYPE').value == "Main") {

            // document.getElementById('Chksave').value = "save";
            var chkmndtry = GridMndtry("ISDBMndtry");


            if (chkmndtry == "No") {
                return;
            }

            var FORMXML = submitdata("ISDBfields");


            $.ajax({
            	//UI_formdatains_NewMenuEntry
            	
                url: "/ThemePro_LSW/UI_formdatainsInsert",
                data: { xml: FORMXML },
                async:false,
           type:"Post",
                success : function OnSuccess_submit(Result) {
                	
                	//alert(Result);
                    if (Result == 'Success') {
                       
                       // window.alert("Data Saved");
						window.alert(LoadFrmXML("V0108"));
  $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );

                        var select = document.getElementById('MenuFunction').value

                        if (select != '') {

                            document.getElementById('MenuFunction').value = ''

                        }

                    }
                    else {
                        // DateChangeBack("ISDatefield");
                       // window.alert("Menu name already Exsist ");
						window.alert(LoadFrmXML("V0137"));
						
                        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
                        var select = document.getElementById('MenuFunction').value

                        if (select != '') {

                            document.getElementById('MenuFunction').value = ''

                        }
                    }
                },
                error: function OnError_submit(xmlRequest) {
                    //DateChangeBack("ISDatefield");
                   // window.alert("Submission Failed");
					window.alert(LoadFrmXML("V0075"));

                }
            });

        }


        else if (document.getElementById('EntryTYPE').value == "Sub") {

            $('#Menulevel').addClass('ISDBMndtry');
            
            $('#MainMENU').addClass('ISDBMndtry');
            $('#SubMenuName').addClass('ISDBMndtry');
            if (document.getElementById("MenuFunction").value == "Queue Page")
            	{
            	 $('#QueueParam').addClass('ISDBMndtry');
            	}
            else{
            	 $('#QueueParam').removeClass('ISDBMndtry');
            	
            	
            }
            if (document.getElementById('Menulevel').value == "Level 1") {

                var chkmndtry = GridMndtry("ISDBMndtry");


                if (chkmndtry == "No") {
                    return;
                }


                var FORMXML = submitdata("ISDBfields");

                $.ajax({

                    url: "/ThemePro_LSW/UI_formdatains_NewSubMenuEntry",
                    data: { xml: FORMXML },
                    async: false,
                    type: 'POST',
                    success: function OnSuccess_submit(Result) {
                        if (Result == 'Success') {
                          // window.alert(" Data Saved");
						   window.alert(LoadFrmXML("V0108"));

  $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );



                            var levelselect = document.getElementById('Menulevel').value

                            if (levelselect != '') {

                                document.getElementById('Menulevel').value = ''

                            }

                            var select = document.getElementById('MenuFunction').value

                            if (select != '') {

                                document.getElementById('MenuFunction').value = ''

                            }

                        }
                        else {
                            // DateChangeBack("ISDatefield");
                           // window.alert("Menu Name already exsist ");
							window.alert(LoadFrmXML("V0137"));
                            $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
                            var select = document.getElementById('MenuFunction').value

                            if (select != '') {

                                document.getElementById('MenuFunction').value = ''

                            }
                        }
                    },
                    error: function OnError_submit(xmlRequest) {
                        //DateChangeBack("ISDatefield");
                       // window.alert("Submission Failed");
						window.alert(LoadFrmXML("V0075"));

                    }
                });

            }

            else if (document.getElementById('Menulevel').value == "Level 2") {

                var chkmndtry = GridMndtry("ISDBMndtry");


                if (chkmndtry == "No") {
                    return;
                }

                var param1 = document.getElementById('MenuID').value;
                var FORMXML = submitdata("ISDBfields");

                $.ajax({
//UI_formdatains_NewSubMenuLevel2
                    url: "/ThemePro_LSW/UI_formdatains_NewSubMenuLevel2",
                    data: { xml: FORMXML, param1: param1 },
                    async: false,
                    type: 'POST',
                    success: function OnSuccess_submit(data) {
                        if (data == 'Success') {
                     
                          //  window.alert(" Data Saved");
							window.alert(LoadFrmXML("V0137"));




                            $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );



                            var levelselect = document.getElementById('Menulevel').value

                            if (levelselect != '') {

                                document.getElementById('Menulevel').value = ''

                            }

                            var select = document.getElementById('MenuFunction').value

                            if (select != '') {

                                document.getElementById('MenuFunction').value = ''

                            }

                        }
                        else {
                            // DateChangeBack("ISDatefield");
                            //window.alert("Menu Name already exsist ");
							window.alert(LoadFrmXML("V0137"));
                            $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
                            var select = document.getElementById('MenuFunction').value

                            if (select != '') {

                                document.getElementById('MenuFunction').value = ''

                            }
                        }
                    },
                    error: function OnError_submit(xmlRequest) {
                        //DateChangeBack("ISDatefield");
                       // window.alert("Submission Failed");
						window.alert(LoadFrmXML("V0075"));

                    }
                });



            }


        }



    });
    $('#UpdateBtn').click(function () {

        $('#Menulevel').removeClass('ISDBMndtry');
        $('#MenuName').removeClass('ISDBMndtry');
        $('#MainMENU').removeClass('ISDBMndtry');
        $('#SubMenuName').removeClass('ISDBMndtry');
        $('#MenuURL').removeClass('ISDBMndtry');
        $('#MenuFunction').removeClass('ISDBMndtry');
        $('#editMenuLevel').removeClass('ISDBMndtry');
        $('#editMenuName').addClass('ISDBMndtry');
        $('#QueueParam').removeClass('ISDBMndtry');
        
        if (document.getElementById("editMenuFunction").value == "Queue Page")
    	{
    	 $('#editQueueParam').addClass('ISDBMndtry');
    	}
    else{
    	 $('#editQueueParam').removeClass('ISDBMndtry');
    	
    	
    }
        
        var chkmndtry = GridMndtry("ISDBMndtry");


        if (chkmndtry == "No") {
            return;
        }

        var FORMXML = submitdata("ISDBfields");

        var code = "Update";

        $.ajax({

            url: "/ThemePro_LSW/UI_formdatains_MenuModifyEntry",
            data: { xml: FORMXML, code: code },
            async:false,
            type: 'POST',
            success: function OnSuccess_submit(data) {
                if (data == 'Success') {
                	//window.alert("Data saved");
					window.alert(LoadFrmXML("V0108"));
                    $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
                    var editMenuFunction = document.getElementById('editMenuFunction').value

                    if (editMenuFunction != '') {

                        document.getElementById('editMenuFunction').value = '';

                    }
                    var editMenuLevel = document.getElementById('editMenuLevel').value

                    if (editMenuLevel != '') {

                        document.getElementById('editMenuLevel').value = '';

                    }
                    $("#Tab2").trigger("click");

                }
                else {
                   // window.alert("Menu Name already exsist");
					window.alert(LoadFrmXML("V0137"));
                    $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
                    document.getElementById("editMenuLevel").value == "Level1"

                    var editMenuFunction = document.getElementById('editMenuFunction').value

                    if (editMenuFunction != '') {

                        document.getElementById('editMenuFunction').value = '';

                    }
                }
            },
            error: function OnError_submit(xmlRequest) {
                //DateChangeBack("ISDatefield");
                //GridDateChangeBack_m("TablerescADD", "ISDatefields", "2");
               // window.alert("Submission Failed");
				window.alert(LoadFrmXML("V0075"));

            }
        });
    });


    $('#DeleteBtn').click(function () {


        var FORMXML = submitdata("ISDBfields");

        var code = "Delete";

        $.ajax({

            url: "/ThemePro_LSW/UI_formdatains_MenuModifyEntry",
            data: { xml: FORMXML, code: code },
            async:false,
            type: 'POST',
            success: function OnSuccess_submit(data) {
                if (data == 'Success') {
                	//window.alert("Data Deleted");
					window.alert(LoadFrmXML("V0109"));
                    $("#Tab2").trigger("click");
                    $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
                    var editMenuFunction = document.getElementById('editMenuFunction').value

                    if (editMenuFunction != '') {

                        document.getElementById('editMenuFunction').value = '';

                    }
                    var editMenuLevel = document.getElementById('editMenuLevel').value

                    if (editMenuLevel != '') {

                        document.getElementById('editMenuLevel').value = '';

                    }
                }
                else {
                   // window.alert("Insertion Failed");
					window.alert(LoadFrmXML("V0085"));

                }
            },
            error: function OnError_submit(xmlRequest) {
                //window.alert("Submission Failed");
				window.alert(LoadFrmXML("V0075"));

            }
        });
    });
    $('#RearrSubmit').click(function () {
        $('#Menulevel').removeClass('ISDBMndtry');
        $('#MenuName').removeClass('ISDBMndtry');
        $('#MainMENU').removeClass('ISDBMndtry');
        $('#SubMenuName').removeClass('ISDBMndtry');
        $('#MenuURL').removeClass('ISDBMndtry');
        $('#MenuFunction').removeClass('ISDBMndtry');
        $('#editMenuLevel').removeClass('ISDBMndtry');
        $('#editMenuName').removeClass('ISDBMndtry');
        //listbox_selectall('RemenuName', true);
        getValue();
        //var XmlTxt = getValue();
        var FromLBVal = document.getElementById('FromLBVal').value;
        var XmlTxt = submitdata("ISDBfields");
        //  var XmlTxt = document.getElementById('RemenuName').value;
        var level = document.getElementById('ReMenuLevel').value;
        if (level=='0')
        {
            var code = '';
            //@P_MenuId
            var MenuId = '';
        }
        if (level == '1') {
            var MenuId = document.getElementById('RemenuId').value;
            document.getElementById('RemenuId').value = '';
            var code = document.getElementById('ParentRemenuId').value;
            document.getElementById('ParentRemenuId').value = '';
            //@P_MenuId
           
        }
        if (level == '2') {
            var MenuId = document.getElementById('RemenuId').value;
            document.getElementById('RemenuId').value = '';
            var code = document.getElementById('ParentRemenuId').value;
            document.getElementById('ParentRemenuId').value = '';
            //@P_MenuId

        }
        $.ajax({
            url: "/ThemePro_LSW/UI_formdatains_MenuRearrangeEntry",
            data: { xml: XmlTxt, level:level, MenuId:MenuId, code: code },
            async: false,
           // dataType: "json",
            type: 'POST',
            success: function OnSuccess_submit(data) {
                if (data == 'Success') {

                   // $("#Tab3").trigger("click");
                   
                  //  window.alert("Data Saved");
					window.alert(LoadFrmXML("V0108"));
                    document.getElementById('ReMenuLevel').value = '';
                    $("#RemenuName").empty();
                    $("#MainRemenuName").empty(); 
                    $("#SubRemenuName").empty();
                }
               
            },
            error: function OnError_submit(xmlRequest) {
			window.alert(LoadFrmXML("V0075"));
                //window.alert("Submission Failed");

            }
    });
    });
});


