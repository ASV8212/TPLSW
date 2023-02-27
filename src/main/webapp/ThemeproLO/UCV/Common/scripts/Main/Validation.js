

function clktoaddSeq() {

    var chkmndtry = ChkMandatoryFields("ISResurcMndtry");


    if (chkmndtry == "No") {
        return;
    }


    document.getElementById('tablSeq').style.display = "";

    var rowCount;
    rowCount = $('#TableSEQL tr').length;         // GET ROW COUNT.



    // ADD TEXTBOX VALUES TO THE GRIDVIEW.

    // if ($('#name').val() != '' && $('#Table1 tr').length > 1) {
    $('#TableSEQL tr:last').after(
                '<tr >' +
				'<td><input type="button" class="buttonPRS GridRowEditBTN" value="Edit"> <input type="button" class="buttonPRS GridRowDeleteBTN"  value="Del"></td>' +
   	            '<td><input type="hidden" disabled class="inputTXT ISGridDBfields" id="SEQL_Purpose" name="SEQL_Purpose" value="' + $('#SEQL_Purpose_AS').val() + '"><font face="Verdana" size="2">' + $('#SEQL_Purpose_AS').val() + '</font></td>' +
                    '<td><input type="hidden" class="inputTXT ISGridDBfields" disabled id="SEQL_InitialVal" name="SEQL_InitialVal" value="' + $('#SEQL_InitialVal_AS').val() + '"><font face="Verdana" size="2">' + $('#SEQL_InitialVal_AS').val() + '</font></td>' +
                    '<td><input type="hidden" class="inputTXT ISGridDBfields" disabled id="SEQL_CurrentVal" name="SEQL_CurrentVal" value="' + $('#SEQL_CurrentVal_AS').val() + '"><font face="Verdana" size="2">' + $('#SEQL_CurrentVal_AS').val() + '</font></td>' +
                    '<td><input type="hidden" class="inputTXT ISGridDBfields" disabled id="SEQL_Maximum" name="SEQL_Maximum" value="' + $('#SEQL_Maximum_AS').val() + '"><font face="Verdana" size="2">' + $('#SEQL_Maximum_AS').val() + '</font></td>' +
                    '<td><input type="hidden" class="inputTXT ISGridDBfields" disabled id="SEQL_Prefix" name="SEQL_Prefix" value="' + $('#SEQL_Prefix_AS').val() + '"><font face="Verdana" size="2">' + $('#SEQL_Prefix_AS').val() + '</font></td>' +
                    '<td><input type="hidden" class="inputTXT ISGridDBfields" disabled id="SEQL_Suffix" name="SEQL_Suffix" value="' + $('#SEQL_Suffix_AS').val() + '"><font face="Verdana" size="2">' + $('#SEQL_Suffix_AS').val() + '</font></td>' +
                    '<td><input type="hidden" class="inputTXT ISDatefields ISGridDBfields" disabled id="SEQL_Purpose_Allocation" name="SEQL_Purpose_Allocation" value="' + $('#SEQL_Purpose_Allocation_AS').val() + '"><font face="Verdana" size="2">' + $('#SEQL_Purpose_Allocation_AS').val() + '</font></td>' +
                    
                    '</tr>');



    // CLEAR ALL TEXTBOXES.
    $('.clearAddr').val("");
}




// Address Grid Fetch Exists
function OnloadgridAddr(FieldID, tableid) {

    var str_array = FieldID.split(',');
    var str_array1 = tableid.split(',');
    var FieldIDn = "";

    if (FieldID != "") {

        for (var m = 0; m < str_array.length; m++) {

            FieldIDn = str_array[m];
            tableid = str_array1[m];

            var xmldata = document.getElementById(FieldIDn).value;

            if (xmldata != "") {
                //if(xmldata!="<LKYC_Addressdetl />")
                //{
                var str_xml = xmldata;
                var parser_xml = new DOMParser();
                var oXml = parser_xml.parseFromString(str_xml, "text/xml");
                var obj_elementcol = oXml.documentElement;


                //////// ONLOAD TO ADD ROWS

                var tbrowcount = obj_elementcol.childNodes[0].childNodes.length;
                var template = $('#' + tableid).find(".grid-row-template");

                if (obj_elementcol.childNodes[0] != null) {

                    document.getElementById('tablSeq').style.display = "";

                    var RowBind = "";

                    for (var i = 0; i < obj_elementcol.childNodes[0].childNodes.length; i++) {

                        var a = '<tr>'

                        var SEQL_Purpose = obj_elementcol.childNodes[0].childNodes[i].childNodes[0].innerHTML;
                        var SEQL_InitialVal = obj_elementcol.childNodes[0].childNodes[i].childNodes[1].innerHTML;
                        var SEQL_CurrentVal = obj_elementcol.childNodes[0].childNodes[i].childNodes[2].innerHTML;
                        var SEQL_Maximum = obj_elementcol.childNodes[0].childNodes[i].childNodes[3].innerHTML;
                        var SEQL_Prefix = obj_elementcol.childNodes[0].childNodes[i].childNodes[4].innerHTML;

                        var SEQL_Suffix = obj_elementcol.childNodes[0].childNodes[i].childNodes[5].innerHTML;
                        var SEQL_Purpose_Allocation = obj_elementcol.childNodes[0].childNodes[i].childNodes[6].innerHTML;



                        a = a + '<td><input type="button" class="buttonPRS GridRowEditBTN" value="Edit"> <input type="button" class="buttonPRS GridRowDeleteBTN"  value="Del"></td>' + 
                        '<td><input type="hidden" disabled class="ISGridDBfields ISDisable" id="SEQL_Purpose" name="SEQL_Purpose" value="' + SEQL_Purpose + '"><font face="Verdana" size="2">' + SEQL_Purpose + '</font></td>' +
                '<td><input type="hidden" disabled class=" inputTXT ISGridDBfields" id="SEQL_InitialVal" name="SEQL_InitialVal" value="' + SEQL_InitialVal + '"><font face="Verdana" size="2">' + SEQL_InitialVal + '</font></td>' +
                '<td><input type="hidden" disabled class="ISGridDBfields ISDisable" id="SEQL_CurrentVal" name="SEQL_CurrentVal" value="' + SEQL_CurrentVal + '"><font face="Verdana" size="2">' + SEQL_CurrentVal + '</font></td>' +
                '<td><input type="hidden" disabled class="ISGridDBfields" id="SEQL_Maximum" name="SEQL_Maximum" value="' + SEQL_Maximum + '"><font face="Verdana" size="2">' + SEQL_Maximum + '</font></td>' +
               '<td><input type="hidden" disabled class="ISGridDBfields" id="SEQL_Prefix" name="SEQL_Prefix" value="' + SEQL_Prefix + '"><font face="Verdana" size="2">' + SEQL_Prefix + '</font></td>' +
                '<td><input type="hidden" disabled class="ISGridDBfields" id="SEQL_Suffix" name="SEQL_Suffix" value="' + SEQL_Suffix + '"><font face="Verdana" size="2">' + SEQL_Suffix + '</font></td>' +
                '<td><input type="hidden" disabled class="ISGridDBfields" id="SEQL_Purpose_Allocation" name="SEQL_Purpose_Allocation" value="' + SEQL_Purpose_Allocation + '"><font face="Verdana" size="2">' + SEQL_Purpose_Allocation + '</font></td>' 
                 
                        a = a + '</tr>'

                        RowBind = RowBind + a;
                    }

                    $('#' + tableid + ' tr:last').after(RowBind);

                }

            }
            else {

                $('#' + tableid).find("tr:gt(0)").remove();
                document.getElementById('tablSeq').style.display = "none";
            }

        }
    }

}



$(document).on('click', '.GridRowDeleteBTN', function () {

    $(this).closest('tr').remove();
    return false;
});




$(document).on('click', '.GridRowEditBTN', function () {

    var IndexRow = parseInt($(this).closest('tr').index()) - 1;
    var RowFieldsCount = $(this).closest('tr').find('.ISGridDBfields').length;

    for (i = 0; i < RowFieldsCount; i++) {

        name = $(this).closest('tr').find('.ISGridDBfields')[i].name;
        value = $(this).closest('tr').find('.ISGridDBfields')[i].value;

        document.getElementById(name + '_AS').value = value;

    }

    $(this).closest('tr').remove();
    return false;
});

