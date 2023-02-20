

function levelmenu() {
    if (document.getElementById("Menulevel").value == "Level 1") {
        $('.find1').show();
        $('.find2').hide();
        $('.QueueShow').hide();

        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
        document.getElementById("Menulevel").value == "Level 1"
        var select = document.getElementById('MenuFunction').value

        if (select != '') {

            document.getElementById('MenuFunction').value = ''

        }

    }
    else if (document.getElementById("Menulevel").value == "Level 2") {


        $('.find1').hide();
        $('.find2').show();
        $('.QueueShow').hide();
        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );
        document.getElementById("Menulevel").value == "Level 2"
        var select = document.getElementById('MenuFunction').value

        if (select != '') {

            document.getElementById('MenuFunction').value = ''
           
        }
    }
    else if (document.getElementById("Menulevel").value == "") {
        $('.find1').hide();
        $('.find2').hide();
        $('.QueueShow').hide();
    } 
}




function Queuehideshow() {
    if (document.getElementById("MenuFunction").value == "Queue Page") {
        $('.QueueShow').show();
        $('#Qparamlookup').show();
        $('#QueueParam').addClass('ISDBMndtry');
    }
    else {

        $('.QueueShow').hide();
        $('#Qparamlookup').hide();
        $('#QueueParam').removeClass('ISDBMndtry');
    
    }

}


function QueueEdithideshow() {
    if (document.getElementById("editMenuFunction").value == "Queue Page") {
        $('.EditQueueShow').show();
        $('#editQparamlookup').show();
        $('#editQueueParam').addClass('ISDBMndtry');
    }
    else {

        $('.EditQueueShow').hide();
        $('#editQparamlookup').hide();
        $('#editQueueParam').removeClass('ISDBMndtry');

    }

}

function menuselect() {
    if (document.getElementById("editMenuLevel").value == "Level1") {

        $('.MainShow').hide();
        $('.SubShowlevel1').show();
        $('.SubShowlevel2').hide();
        $('.EditQueueShow').hide();
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
    else if (document.getElementById("editMenuLevel").value == "Level2") {

        $('.MainShow').hide();
        $('.SubShowlevel1').hide();
        $('.SubShowlevel2').show();
        $('.EditQueueShow').hide();
        $('.TXTFIELDSCLEAR').find('input:text').each(

                function () {
                    $('input:text[id=' + $(this).attr('id') + ']').val('');
                }

            );

                document.getElementById("editMenuLevel").value == "Level2"

                var editMenuFunction = document.getElementById('editMenuFunction').value

                if (editMenuFunction != '') {

                    document.getElementById('editMenuFunction').value = '';

                }

            }
            else if (document.getElementById("editMenuLevel").value == "") {
                $('.MainShow').hide();
                $('.SubShowlevel1').hide();
                $('.SubShowlevel2').hide();
                $('.EditQueueShow').hide();
            } 
}



function listbox_move(listID, direction) {

    var listbox = document.getElementById(listID);
    var selIndex = listbox.selectedIndex;

    if (-1 == selIndex) {
        //window.alert("Please select an option to move.");
		window.alert(LoadFrmXML("V0129"));
        return;
    }

    var increment = -1;
    if (direction == 'up')
        increment = -1;
    else
        increment = 1;

    if ((selIndex + increment) < 0 ||
        (selIndex + increment) > (listbox.options.length - 1)) {
        return;
    }

    var selValue = listbox.options[selIndex].value;
    var selText = listbox.options[selIndex].text;
    listbox.options[selIndex].value = listbox.options[selIndex + increment].value
    listbox.options[selIndex].text = listbox.options[selIndex + increment].text

    listbox.options[selIndex + increment].value = selValue;
    listbox.options[selIndex + increment].text = selText;

    listbox.selectedIndex = selIndex + increment;
}



function menurearrLevel0() {
    if (document.getElementById('ReMenuLevel').value == '') {
        $("#SubRemenuName").empty();
        $(".EditDetails").hide();
        $(".ShowNewMenu").hide();
        $(".rearrhide").hide();
    }
    $("#MainRemenuName").empty()
    var menulevel = document.getElementById('ReMenuLevel').value;
    if (menulevel == "0") {
        $('.level1show').hide();
        $('.level2show').hide();
    }
    if (menulevel=="1")
    {
        $('.level1show').show();
        $('.level2show').hide();
    }
    if (menulevel == "2") {
        $('.level1show').show();
        $('.level2show').hide();
    }
    if (menulevel == "0") {
        var SubLevel = '';
    }
    if (menulevel == "1") {
        var SubLevel = document.getElementById('MainRemenuName').value;
    }
    if (menulevel == "2") {
        var SubLevel = '';
    }
    $("#RemenuName").empty()
    
    $.ajax({
        url: "ThemeproLO/UI_fetchMenuFrmRearrge",
        data: { MenuLevel: menulevel, SubLevel: SubLevel },
        async: false,
        ///dataType: "json",
        type: 'POST',
        success: function (data) {
          
       
            var str_xml = data;
            var parser_xml = new DOMParser();
            var oXml = parser_xml.parseFromString(str_xml, "text/xml");
            var obj_elementcol = oXml.documentElement;

            for (var i = 0; i < obj_elementcol.getElementsByTagName('row').length; i++) {

                var option = document.createElement('option');

                  var item = obj_elementcol.getElementsByTagName('row')[i].textContent;
   //
                 option.value =$.trim(item);
                option.innerHTML = item;
                if (menulevel == "0") {
                    document.getElementById("RemenuName").appendChild(option);
                }
                if (menulevel == "1") {
                    document.getElementById("MainRemenuName").appendChild(option);
                   
                }
                if (menulevel == "2") {
                    document.getElementById("MainRemenuName").appendChild(option);
                }
            }
         }
    });
    if (document.getElementById('MainRemenuNamehd').value == '' && menulevel == "1")
    {
        document.getElementById('MainRemenuNamehd').value = document.getElementById('MainRemenuName').value

       
        var SubLevel = document.getElementById('MainRemenuNamehd').value;
        menurearrLevel1()
    }
    if (document.getElementById('MainRemenuNamehd').value == '' && menulevel == "2")
    {
        document.getElementById('MainRemenuNamehd').value = document.getElementById('MainRemenuName').value
       
        var SubLevel = document.getElementById('MainRemenuNamehd').value;
        menurearrLevel1()
    }
}


function getValue() {
    var x = document.getElementById("RemenuName");
    var listval = "";
    for (var i = 0; i < x.options.length; i++) {
        listval = listval + "<Data>";
        listval = listval + "<value>";
        listval = listval + x.options[i].value;
        listval = listval + "</value>";
        listval = listval + "</Data>";
    }
    $('#FromLBVal').val(listval);
}
//menurearrLevel0()
function levelSelection()
{
    var level = document.getElementById('ReMenuLevel').value;
    if (level=="0")
    {
     
        menurearrLevel0();
    }
    if (level == "1")
    {
    }

}
function menurearrLevel1() {
    var SubLevel;
    $("#SubRemenuName").empty()
    var menulevel = document.getElementById('ReMenuLevel').value;
    if (menulevel == "0") {
        $('.level1show').hide();
    }
    if (menulevel == "1") {
        $('.level1show').show();
    }
    if (menulevel == "0") {
         SubLevel = '';
    }
    if (menulevel == "1") {
        document.getElementById('MainRemenuNamehd').value = document.getElementById('MainRemenuName').value
        SubLevel = document.getElementById('MainRemenuNamehd').value;
        SubLevelOne = document.getElementById('MainRemenuNamehd').value;
        SubLevelTwo = '';
         $.ajax({
             url: "ThemeproLO/UI_fetchRemenuID",
             data: { MenuLevel: menulevel, SubLevelOne: SubLevelOne, SubLevelTwo: SubLevelTwo },
             async: false,
            // dataType: "json",
             type: 'POST',
             success: function (xml1){
                 var n = document.getElementsByClassName("RemenuID");
                 for (i = 0; i < n.length; i++) {
                     name = document.getElementsByClassName("RemenuID").item(i).name;
                     var val = $(xml1).find(name).text();
                     if (val != "") {
                         document.getElementById(name).value = val;
                     }
                 }
                         
                     },

                     error: function (xml1) {

                        // window.alert("On Load Data Failed");
						 window.alert(LoadFrmXML("V0070"));

                     }
         });
        document.getElementById('MainRemenuNamehd').value = '';
    }
    if (menulevel == "2") {
        $('.level2show').show();
        document.getElementById('MainRemenuNamehd').value = document.getElementById('MainRemenuName').value
       
         SubLevel = document.getElementById('MainRemenuNamehd').value;
       
    }
    
    $("#RemenuName").empty()
   
    $.ajax({
        url: "ThemeproLO/UI_fetchMenuFrmRearrge",
        data: { MenuLevel: menulevel, SubLevel: SubLevel },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function (data) {

         
            var str_xml = data;
            var parser_xml = new DOMParser();
            var oXml = parser_xml.parseFromString(str_xml, "text/xml");
            var obj_elementcol = oXml.documentElement;

            for (var i = 0; i < obj_elementcol.getElementsByTagName('row').length; i++) {

                var option = document.createElement('option');

                  var item = obj_elementcol.getElementsByTagName('row')[i].textContent;
   //
                 option.value =$.trim(item);
                option.innerHTML = item;   
               
                if (menulevel == "1") {
                    document.getElementById("RemenuName").appendChild(option);
                }
                if (menulevel == "2") {
                    document.getElementById("SubRemenuName").appendChild(option);
                  
                }
               
            }

           

        }
    });

    if (document.getElementById('SubRemenuNamehd').value == '' && menulevel == "2")
    {
      
        document.getElementById('SubRemenuNamehd').value = document.getElementById('SubRemenuName').value
     
        $.trim(document.getElementById('SubRemenuNamehd').value)
        menurearrLevel2()
    }
}

function menurearrLevel2() {
    var menulevel = document.getElementById('ReMenuLevel').value;
    if (menulevel == "0") {
        $('.level1show').hide();
    }
    if (menulevel == "1") {
        $('.level1show').show();
    }
    if (menulevel == "0") {
        var SubLevel = '';
    }
    if (menulevel == "2") {
        document.getElementById('MainRemenuNamehd').value = document.getElementById('MainRemenuName').value;
       
     var SubLevelOne = document.getElementById('MainRemenuNamehd').value;
     document.getElementById('MainRemenuNamehd').value = '';
        document.getElementById('SubRemenuNamehd').value = document.getElementById('SubRemenuName').value;
        
      var SubLevelTwo = document.getElementById('SubRemenuNamehd').value;
      document.getElementById('SubRemenuNamehd').value = '';
       
      SubLevel = document.getElementById('MainRemenuNamehd').value;
     $.ajax({
        url: "ThemeproLO/UI_fetchRemenuID",
         data: { MenuLevel: menulevel, SubLevelOne: SubLevelOne, SubLevelTwo:SubLevelTwo},
         async: false,
       
          type: 'POST',
         success: function (xml1) {
              var n = document.getElementsByClassName("RemenuID");
              for (i = 0; i < n.length; i++) {
                  name = document.getElementsByClassName("RemenuID").item(i).name;
                  var val = $(xml1).find(name).text();
                 if (val != "") {
                      document.getElementById(name).value = val;
                  }
              }

          },

         error: function (xml1) {

              //window.alert("fail");
				window.alert(LoadFrmXML("V0076"));
     }
   });
        ////////////////////////////////////////////////////////
    }
    $("#RemenuName").empty()

    $.ajax({
        url: "ThemeproLO/UI_fetchMenuFrRearrge3",
        data: { MenuLevel: menulevel, SubLevelOne: SubLevelOne, SubLevelTwo: SubLevelTwo },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function (data) {

            var str_xml = data;
            var parser_xml = new DOMParser();
            var oXml = parser_xml.parseFromString(str_xml, "text/xml");
            var obj_elementcol = oXml.documentElement;

            for (var i = 0; i < obj_elementcol.getElementsByTagName('row').length; i++) {

                var option = document.createElement('option');

                  var item = obj_elementcol.getElementsByTagName('row')[i].textContent;
   //
                 option.value =$.trim(item);
                option.innerHTML = item;
                document.getElementById("RemenuName").appendChild(option);

            }

          

        }
    });
}