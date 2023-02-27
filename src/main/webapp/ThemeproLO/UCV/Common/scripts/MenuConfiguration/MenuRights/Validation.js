//function transactiontype(responseText) {

//    var billtype = document.getElementById('INVE_TYPE').value;
//    if (billtype == 'VCN') {
//        document.getElementById('INVE_TRANS_TYPE').value = 'Cr'
//    }
//    else if (billtype == 'VIN' || billtype == 'VDN') {
//        document.getElementById('INVE_TRANS_TYPE').value = 'Dr'
//    }
//     else {
//        document.getElementById('INVE_TRANS_TYPE').value = ''
//    }
//}


function hideshow() {
   
    if (document.getElementById("Menulevel").value == "0") {
        $(".level0").hide();
 
       
    }
    else if (document.getElementById("Menulevel").value == "1") {
        $(".levelhide").hide();
        $(".levelshow2").show();	
   
    }
    else {
        $(".level0").show();

    }

}



function selecthide() {
if (document.getElementById("Menulevel").value == "Select") {
    $(".level0").hide();
   
}
}



function hideshowDel() {

    if (document.getElementById("DelMenulevel").value == "0") {
        $(".level0").hide();

    }
    else if (document.getElementById("DelMenulevel").value == "1") {
        $(".levelhide").hide();
        $(".levelshow2").show();

    }
    else {
        $(".level0").show();

    }

}
function selecthideDel() {
    if (document.getElementById("DelMenulevel").value == "Select") {
        $(".level0").hide();

    }
	$('#Table3_wrapper').hide();
}

//function everyone() {
//    if (document.getElementById("Menulevel").value == "0") {
//      
//     

//   }
//    else {

//       alert('Everyone for only Level0')
//   }

//}
function Clearfields() {



    if (document.getElementById("Menulevel").value == "Select") {
        $('#menulookup').hide();
        $('#Rightslookup').hide();


    }
    else {

        $('#menulookup').show();
        $('#Rightslookup').show();

    }
        $.each($('#content').find($('input[type="text"]')), function () {
            $(this).val("");
        });

  
    $('#Level').val('');
    $('#AssignForAllSubLevels').val('');
    $('.ClrTXT').val('');


}


function userlookup() {
    if (document.getElementById("DelLevel").value == "Select") {
        $('#RightslookupDel').hide();



    }
    else {

        $('#RightslookupDel').show();


    }


}

function ClearfieldsDel() {



    if (document.getElementById("DelMenulevel").value == "Select") {
        $('#menulookupDel').hide();
       


    }
    else {

        $('#menulookupDel').show();
        

    }
    $.each($('#Delcontent').find($('input[type="text"]')), function () {
        $(this).val("");
    });


    $('#DelLevel').val('');
   
    $('.ClrTXTDel').val('');


}





//function lookup() {
//    if (document.getElementById("SetRightsID").value == "User") {
//        $("#userlookup").show();
//        $("#grouplookup").hide();
//    }


//    else {
//        document.getElementById("SetRightsID").value == "Group"
//        $("#grouplookup").show();
//        $("#userlookup").hide();
//    }

//}


//function leveuserlookup() {

//    if ((document.getElementById("Menulevel").value == "0") && (document.getElementById("SetRightsID").value == "User")) {
//        $("#userlookup").show();
//        $("#userlookup2").hide();

//    }
//    else if((document.getElementById("Menulevel").value == "1") && (document.getElementById("SetRightsID").value == "User")) {
//        $("#userlookup1").show();
//        $("#userlookup").hide();



//    }
//    else if ((document.getElementById("Menulevel").value == "2") && (document.getElementById("SetRightsID").value == "User")) {
//        $("#userlookup2").show();
//        $("#userlookup").hide();
//        $("#userlookup1").hide();


//    }
//    else {
//        $("#userlookup").hide();
//        $("#userlookup1").hide();
//        $("#userlookup2").hide();
//    }

//}
//function levegrouplookup() {

//    if ((document.getElementById("Menulevel").value == "0") && (document.getElementById("SetRightsID").value == "Group")) {
//        $("#grouplookup").show();
//        $("#grouplookup2").hide();
//        $("#grouplookup1").hide();
//    }
//    else if ((document.getElementById("Menulevel").value == "1") && (document.getElementById("SetRightsID").value == "Group")) {
//        $("#grouplookup1").show();
//        $("#grouplookup").hide();
//        $("#userlookup").hide();



//    }
//    else if ((document.getElementById("Menulevel").value == "2") && (document.getElementById("SetRightsID").value == "Group")) {
//        $("#grouplookup2").show();
//        $("#grouplookup").hide();
//        $("#grouplookup1").hide();


//    }
//    else {
//        $("#grouplookup").hide();
//        $("#grouplookup1").hide();
//        $("#grouplookup2").hide();
//    }

//}
//

////Calculation for vatLC

//function BillBaseValue() {
//    var num1 = parseInt(document.getElementById("INVE_EXCG_RATE").value.replace(/,/g, ""));
//    var num2 = parseInt(document.getElementById("INVE_FC_VAL").value.replace(/,/g, ""));
//    num3 = num1 * num2;
//    $('#INVE_LC_VAL').val(CURCommaSep(num3));
//   
//   // document.getElementById("INVE_LC_VAL").value = num1 * num2;
//}

//function vatLC() {

//    var num1 = parseFloat(document.getElementById("INVE_VAT_FC_VAL").value.replace(/,/g, ""));
//    var num2 = parseFloat(document.getElementById("INVE_EXCG_RATE").value.replace(/,/g, ""));
//    var num3 = parseFloat(num1) * parseFloat(num2);
//    if (isNaN(num3)) {
//        num3 = '0';
//    }
//    $('#INVE_VAT_LC_VAL').val(CURCommaSep(num3));
// //   document.getElementById("INVE_VAT_LC_VAL").value = num3;

//}

////Calculation for CSTLC
//function CSTLC() {

//    var num1 = parseFloat(document.getElementById("INVE_CST_FC_VAL").value.replace(/,/g, ""));
//    var num2 = parseFloat(document.getElementById("INVE_EXCG_RATE").value.replace(/,/g, ""));
//    var num3 = parseFloat(num1) * parseFloat(num2);

//    if (isNaN(num3)) {
//        num3 = '0';
//    }
//    $('#INVE_CST_LC_VAL').val(CURCommaSep(num3));
//   // document.getElementById("INVE_CST_LC_VAL").value = num3;

//}

////Calculation for ServiceLC
//function ServiceLC() {

//    var num1 = parseFloat(document.getElementById("INVE_ST_FC_VAL").value.replace(/,/g, ""));
//    var num2 = parseFloat(document.getElementById("INVE_EXCG_RATE").value.replace(/,/g, ""));
//    var num3 = parseFloat(num1) * parseFloat(num2);


//    if (isNaN(num3)) {
//        num3 = '0';
//    }

//    $('#INVE_ST_LC_VAL').val(CURCommaSep(num3));
//    //document.getElementById("INVE_ST_LC_VAL").value = num3;

//}




////Calculation for EduLC
//function EduLC() {

//    var num1 = parseFloat(document.getElementById("INVE_EDT_FC_VAL").value.replace(/,/g, ""));
//    var num2 = parseFloat(document.getElementById("INVE_EXCG_RATE").value.replace(/,/g, ""));
//    var num3 = parseFloat(num1) * parseFloat(num2);



//    if (isNaN(num3)) {
//        num3 = '0';
//    }
//    $('#INVE_EDT_LC_VAL').val(CURCommaSep(num3));
// //   document.getElementById("INVE_EDT_LC_VAL").value = num3;

//}



////Calculation for GenTaxLC
//function GenTaxLC() {

//    var num1 = parseFloat(document.getElementById("INVE_GET_FC_VAL").value.replace(/,/g, ""));
//    var num2 = parseFloat(document.getElementById("INVE_EXCG_RATE").value.replace(/,/g, ""));
//    var num3 = parseFloat(num1) * parseFloat(num2);


//    if (isNaN(num3)) {
//        num3 = '0';
//    }
//    $('#INVE_GET_LC_VAL').val(CURCommaSep(num3));
//   // document.getElementById("INVE_GET_LC_VAL").value = num3;

//}

//function NetBillFC() {


//    var num1 = parseFloat(document.getElementById("INVE_VAT_FC_VAL").value.replace(/,/g, ""));
//    var num2 = parseFloat(document.getElementById("INVE_CST_FC_VAL").value.replace(/,/g, ""));
//    var num3 = parseFloat(document.getElementById("INVE_ST_FC_VAL").value.replace(/,/g, ""));
//    var num4 = parseFloat(document.getElementById("INVE_EDT_FC_VAL").value.replace(/,/g, ""));
//    var num5 = parseFloat(document.getElementById("INVE_GET_FC_VAL").value.replace(/,/g, ""));
//	
//	var num6 = parseFloat(document.getElementById("INVE_FC_VAL").value.replace(/,/g, ""));

//	
//    var num7=parseFloat(num6)-(parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5));

//    if (isNaN(num7)) {
//        num7 = '0';
//    }
//    $('#INVE_NET_FC_VAL').val(CURCommaSep(num7));
//  //  document.getElementById("INVE_NET_FC_VAL").value = num6

//}



//function NetBillLC() {


//    var num1 = parseFloat(document.getElementById("INVE_VAT_LC_VAL").value.replace(/,/g, ""));
//    var num2 = parseFloat(document.getElementById("INVE_CST_LC_VAL").value.replace(/,/g, ""));
//    var num3 = parseFloat(document.getElementById("INVE_ST_LC_VAL").value.replace(/,/g, ""));
//    var num4 = parseFloat(document.getElementById("INVE_EDT_LC_VAL").value.replace(/,/g, ""));
//    var num5 = parseFloat(document.getElementById("INVE_GET_LC_VAL").value.replace(/,/g, ""));
//    var num6 = parseFloat(document.getElementById("INVE_EXCG_RATE").value.replace(/,/g, ""));
//	
//	var num7 = parseInt(document.getElementById("INVE_FC_VAL").value.replace(/,/g, ""));
//	
//    var num8 =parseFloat(num7)-((parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5))*parseFloat(num6));


//    if (isNaN(num8)) {
//        num8 = '0';
//    }
//    $('#INVE_NET_LC_VAL').val(CURCommaSep(num8));
//   // document.getElementById("INVE_NET_LC_VAL").value = num6

//}


/*Fetch Existing Records
function OnchangeFetchExist() {




    var loggedinuser = getUrlParam("username");

    var ProcessID = getUrlParam("processId");

    var activityId = getUrlParam("activityId");

    document.getElementById('XMLOP').value = "";

    $.ajax({
        //url: "Upto50L/UI_fetchformdata",
        url: "UI_fetchformdata_VNDINVCFetch",
        data: { ProcessID: ProcessID },
        async: false,
        dataType: "json",
        type: 'POST',
        success: function (xml1) {

            var n = document.getElementsByClassName("ISDBfields");
            for (i = 0; i < n.length; i++) {
                name = document.getElementsByClassName("ISDBfields").item(i).name;
                var val = $(xml1).find(name).text();
                if (val != "") {
                    document.getElementById(name).value = val;

                    if (val.indexOf("/INTSYSDMS/") != -1) {
                        if (name.toLowerCase().indexOf('photo') != -1) {

                            document.getElementById(name).src = "http://103.230.85.234:1011" + val;

                        }
                        else {

                            document.getElementById(name + "Link").href = "http://103.230.85.234:1011" + val;
                            var LastSlashIndex = val.lastIndexOf('/');
                            document.getElementById(name + "Link").innerHTML = val.substring(LastSlashIndex + 1);
                        }
                    }
                }
            }

            document.getElementById("INVE_PROC").value = ProcessID;
            document.getElementById("INVE_ACTV").value = activityId;
            document.getElementById("INVE_MODIFYDT").value = get2date();

            if (document.getElementById("INVE_CRDT").value == "") {
                document.getElementById("INVE_CRDT").value = get2date();
            }

            if (document.getElementById("INVE_CRTBY").value == "") {
                document.getElementById("INVE_CRTBY").value = loggedinuser;
            }
            document.getElementById("INVE_MODIFYBY").value = loggedinuser;

            $("#TravelBill").trigger("click");
            Onloadtrvlbillfetch("XMLOP", "TRAVELBILL")


        },

        error: function (xml1) {

            alert("On Load Data Failed");

        }

    });

}


*/


// Travel Bill fetch
function OnloadgridMenu(FieldID, tableid) {

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

                    document.getElementById('TabMENU').style.display = "";

                    var RowBind = "";

                    for (var i = 0; i < obj_elementcol.childNodes[0].childNodes.length; i++) {

                        var a = '<tr>'
                        var INVE_CHECK = obj_elementcol.childNodes[0].childNodes[i].childNodes[0].innerHTML;
                        var MenuID = obj_elementcol.childNodes[0].childNodes[i].childNodes[1].innerHTML;
                        var MenuName = obj_elementcol.childNodes[0].childNodes[i].childNodes[2].innerHTML;
                        var MenuURL = obj_elementcol.childNodes[0].childNodes[i].childNodes[3].innerHTML;
                        var MenuFunction = obj_elementcol.childNodes[0].childNodes[i].childNodes[4].innerHTML;
                        var PK_ID = obj_elementcol.childNodes[0].childNodes[i].childNodes[5].innerHTML;
                        a = a +

                          '<td><input type="Checkbox" id="INVE_CHECK" name="INVE_CHECK" class="buttonPRS ISGridDBfields" value="No"></td>' +
                '<td><input type="hidden" class="ISGridDBfields ISDisable" id="MenuID" disabled name="MenuID" value="' + MenuID + '"><font face="Verdana" size="2">' + MenuID + '</font></td>' +
                '<td><input class="ISGridDBfields ISDisable" type="hidden" id="MenuName" disabled name="MenuName" value="' + MenuName + '"><font face="Verdana" size="2">' + MenuName + '</font></td>' +
                '<td><input class="ISGridDBfields ISDisable ISDatefields" type="hidden" id="MenuURL" disabled name="MenuURL" value="' + MenuURL + '"><font face="Verdana" size="2">' + MenuURL + '</font></td>' +
               '<td><input class="ISGridDBfields ISDisable" type="hidden" id="MenuFunction" disabled name="MenuFunction" value="' + MenuFunction + '"><font face="Verdana" size="2">' + MenuFunction + '</font></td>' +

                        '<input class="ISGridDBfields ISDisable" type="hidden" id="PK_ID" disabled name="PK_ID" value="' + PK_ID + '"></td>'
                        a = a + '</tr>'

                        RowBind = RowBind + a;



                    }

                    $('#' + tableid + ' tr:last').after(RowBind);

                    for (var j = 0; j < obj_elementcol.childNodes[0].childNodes.length; j++) {

                        var INVE_CHECK1 = obj_elementcol.childNodes[0].childNodes[j].childNodes[0].innerHTML;

                        if (INVE_CHECK1 == 'Yes') {

                            //$('#INVE_CHECK').prop("checked", true);
                            document.getElementsByName("INVE_CHECK")[j].checked = true;
                            document.getElementsByName("INVE_CHECK")[j].value = 'Yes';
                        }
                        else {
                            document.getElementsByName("INVE_CHECK")[j].checked = false;
                        }
                    }
                }

            }
            else {

                $('#' + tableid).find("tr:gt(0)").remove();
                document.getElementById('TabMENU').style.display = "none";
            }

        }


    }

}

function btnPrevMonth_Click() {
    var selectedIndex = $("#listOfMonths").prop("selectedIndex");
    if (selectedIndex > 0) {
        $("#listOfMonths").prop("selectedIndex", selectedIndex - 1);
    }
}
function btnNextMonth_Click() {
    //  Note:  the JQuery "prop" function requires JQuery v1.6 or later
    var selectedIndex = $("#listOfMonths").prop("selectedIndex");
    var itemsInDropDownList = $("#listOfMonths option").length;

    //  If we're not already selecting the last item in the drop down list, then increment the SelectedIndex
    if (selectedIndex < (itemsInDropDownList - 1)) {
        $("#listOfMonths").prop("selectedIndex", selectedIndex + 1);
    }
}

/* Travel Bill fetch
function Onloadtrvlbillfetch(FieldID, tableid) {

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

                    document.getElementById('TabTRAVEL').style.display = "";

                    var RowBind = "";

                    for (var i = 0; i < obj_elementcol.childNodes[0].childNodes.length; i++) {

                        var a = '<tr>'
                        var INVE_CHECK = obj_elementcol.childNodes[0].childNodes[i].childNodes[0].innerHTML;
                        var TRVL_RQST_NO = obj_elementcol.childNodes[0].childNodes[i].childNodes[1].innerHTML;
                        var TRVL_RQST_SL_NO = obj_elementcol.childNodes[0].childNodes[i].childNodes[2].innerHTML;
                        var TRVL_DATE = obj_elementcol.childNodes[0].childNodes[i].childNodes[3].innerHTML;
                        var TRVL_VENDOR_NAME = obj_elementcol.childNodes[0].childNodes[i].childNodes[4].innerHTML;
                        var TRVL_RES_Name = obj_elementcol.childNodes[0].childNodes[i].childNodes[5].innerHTML;
                        var TRVL_CATEGORY = obj_elementcol.childNodes[0].childNodes[i].childNodes[6].innerHTML;
                        var TRVL_TRANS_TYPE = obj_elementcol.childNodes[0].childNodes[i].childNodes[7].innerHTML;
                        var TRVL_COST_NATURE = obj_elementcol.childNodes[0].childNodes[i].childNodes[8].innerHTML;
                        var TRVL_CCY_ID = obj_elementcol.childNodes[0].childNodes[i].childNodes[9].innerHTML;


                        var TRVL_EXGN_RATE = obj_elementcol.childNodes[0].childNodes[i].childNodes[10].innerHTML;
                        var TRVL_FC_VALUE = obj_elementcol.childNodes[0].childNodes[i].childNodes[11].innerHTML;
                        var TRVL_LC_VALUE = obj_elementcol.childNodes[0].childNodes[i].childNodes[12].innerHTML;
                       var TRVL_PK_ID = obj_elementcol.childNodes[0].childNodes[i].childNodes[13].innerHTML;
                       
                        a = a +
                         '<td><input type="Checkbox" id="INVE_CHECK" name="INVE_CHECK" class="buttonPRS ISGridDBfields" value="' + INVE_CHECK + '"></td>' +
						  '<td><input type="hidden" class="ISGridDBfields ISDisable" id="TRVL_RQST_NO" disabled name="TRVL_RQST_NO" value="' + TRVL_RQST_NO + '"><font face="Verdana" size="2">' + TRVL_RQST_NO + '</font></td>' +
                '<td><input class="ISGridDBfields ISDisable" type="hidden" id="TRVL_RQST_SL_NO" disabled name="TRVL_RQST_SL_NO" value="' + TRVL_RQST_SL_NO + '"><font face="Verdana" size="2">' + TRVL_RQST_SL_NO + '</font></td>' +
                '<td><input class="ISGridDBfields ISDisable ISDatefields" type="hidden" id="TRVL_DATE" disabled name="TRVL_DATE" value="' + TRVL_DATE + '"><font face="Verdana" size="2">' + TRVL_DATE + '</font></td>' +
               '<td><input class="ISGridDBfields ISDisable" type="hidden" id="TRVL_VENDOR_NAME" disabled name="TRVL_VENDOR_NAME" value="' + TRVL_VENDOR_NAME + '"><font face="Verdana" size="2">' + TRVL_VENDOR_NAME + '</font></td>' +
                '<td><input  type="hidden" class="ISGridDBfields ISDisable" id="TRVL_RES_Name" disabled name="TRVL_RES_Name" value="' + TRVL_RES_Name + '"><font face="Verdana" size="2">' + TRVL_RES_Name + '</font></td>' +
                '<td><input class="ISGridDBfields ISDisable" type="hidden" id="TRVL_CATEGORY" disabled name="TRVL_CATEGORY" value="' + TRVL_CATEGORY + '"><font face="Verdana" size="2">' + TRVL_CATEGORY + '</font></td>' +
                '<td><input type="hidden" class="ISGridDBfields ISDisable" id="TRVL_TRANS_TYPE" disabled name="TRVL_TRANS_TYPE" value="' + TRVL_TRANS_TYPE + '"><font face="Verdana" size="2">' + TRVL_TRANS_TYPE + '</font></td>' +
                '<td><input class="ISGridDBfields ISDisable" type="hidden" id="TRVL_COST_NATURE" disabled name="TRVL_COST_NATURE" value="' + TRVL_COST_NATURE + '"><font face="Verdana" size="2">' + TRVL_COST_NATURE + '</font></td>' +
                '<td><input class="ISGridDBfields ISDisable" type="hidden" id="TRVL_CCY_ID" disabled name="TRVL_CCY_ID" value="' + TRVL_CCY_ID + '"><font face="Verdana" size="2">' + TRVL_CCY_ID + '</font></td>' +
                 '<td><input class="ISGridDBfields ISDisable" type="hidden" id="TRVL_EXGN_RATE" disabled name="TRVL_EXGN_RATE" value="' + TRVL_EXGN_RATE + '"><font face="Verdana" size="2">' + TRVL_EXGN_RATE + '</font></td>' +
                  '<td><input class="ISGridDBfields ISDisable" type="hidden" id="TRVL_FC_VALUE" disabled name="TRVL_FC_VALUE" value="' + TRVL_FC_VALUE + '"><font face="Verdana" size="2">' + TRVL_FC_VALUE + '</font></td>' +
                   '<td><input class="ISGridDBfields ISDisable" type="hidden" id="TRVL_LC_VALUE" disabled name="TRVL_LC_VALUE" value="' + TRVL_LC_VALUE + '"><font face="Verdana" size="2">' + TRVL_LC_VALUE + '</font></td>'+
                     '<td><input class="ISGridDBfields ISDisable" type="hidden" id="TRVL_PK_ID" disabled name="TRVL_PK_ID" value="' + TRVL_PK_ID + '"><font face="Verdana" size="2">' + TRVL_PK_ID + '</font></td>'
                       
                        a = a + '</tr>'

                        RowBind = RowBind + a;

                    }

                    $('#' + tableid + ' tr:last').after(RowBind);

                    if (INVE_CHECK == 'Yes') {

                        $('#INVE_CHECK').prop("checked", true);

                    }
                    else {
                        $('#INVE_CHECK').prop("checked", false);
                    }

                }

            }
            else {

                $('#' + tableid).find("tr:gt(0)").remove();
                document.getElementById('TabTRAVEL').style.display = "none";
            }

        }


    }

}
*/
function ReorderFields(actionType, listBoxCtrl) {
    if (actionType == 'up') {
        ListBoxMoveUp(listBoxCtrl);
    }
    else if (actionType == 'down') {
        ListBoxMoveDown(listBoxCtrl);
    }
}

function ListBoxMoveDown(ctrl) {
    var selectedDx = $("#" + ctrl).find("option:selected");
    var next = selectedDx.last().next();

    selectedDx.each(function () {
        $(this).insertAfter(next);
    });
}

function ListBoxMoveUp(ctrl) {
    var selectedDx = $("#" + ctrl).find("option:selected");
    var prev = selectedDx.first().prev();

    selectedDx.each(function () {
        $(this).insertBefore(prev);
    });
}
$(document).on('click', '#INVE_CHECK', function () {
    if (this.checked) {

        $(this).val('Yes');
        
    }
    else {
     $(this).val('No');
        
    }



});

function clrtext() {

    $('#AssignRights').val('');


}

function clrtextDel() {

    $('#DeleteRights').val('');
    $('#DelMenuName').val('');
    $('#DelMenuLevelOne').val('');
    $('#DelMenuLevelTwo').val('');
   
}



 $(document).on('click', '#RightsDelete', function () {
 
 var mnlevel=document.getElementById('Menulevel').value;


if(mnlevel=='0')
{
 
 
 if($("#Table1").parents().find('.block').find('article :visible').find('.AssignDetails').html() != undefined)
 {
 
 var MenuId= $('#MenuID').val(); //$(this).closest('tr').find('td')[1].innerHTML;
var Level=$(this).closest('tr').find('td')[1].innerHTML;
var RightsID=$(this).closest('tr').find('td')[2].innerHTML;
var spname='Sam_smenurightdelt';


alertify.confirm("Are you sure?", function (e) {
        if (e) 
		{	
		    
           var Deletedata= UI_getdata(MenuId,Level,RightsID,"","",spname);
			//$(this).closest('tr').remove();
			$("#Table2_wrapper").hide();
		//	$("#Rgtsgridviewlevel").trigger("click");
FncallPageGrid(this,'Table3',{spname:'Sam_smenurightviewlevel',Param:$('#Menulevel').val(),brid:$('#MenuID').val(),MnuId:$('#MenuLevelOne').val()+ ',' +$('#MenuLevelTwo').val()});		
        } 
		else 
		{
            return;
        }
    });

/*
if (confirm("Are you Sure??") == true) 
{

var Deletedata= UI_getdata(MenuId,Level,RightsID,"","",spname);

$(this).closest('tr').remove();
$("#Rgtsgridview").trigger("click");

}*/
}

}
else if(mnlevel=='1'||mnlevel=='2')
{
var MenuId=""
if(mnlevel=='1')
{
 MenuId=$('#MenuLevelOneID').val();
}
if(mnlevel=='2')
{
 MenuId=$('#MenuLevelTwoID').val();
}


 //$(this).closest('tr').find('td')[1].innerHTML;
var Level=$(this).closest('tr').find('td')[1].innerHTML;
var RightsID=$(this).closest('tr').find('td')[2].innerHTML;
var spname='Sam_smenurightdelt';


alertify.confirm("Are you sure?", function (e) {
        if (e) 
		{	
		    
           var Deletedata= UI_getdata(MenuId,Level,RightsID,"","",spname);
			//$(this).closest('tr').remove();
			$("#Table2_wrapper").hide();
			//$("#Rgtsgridviewlevel").trigger("click");
			
			if(mnlevel=='1')
{
FncallPageGrid(this,'Table3',{spname:'Sam_smenurightviewlevel',Param:$('#Menulevel').val(),brid:$('#MenuLevelOneID').val(),MnuId:$('#MenuLevelOne').val()+ ',' +$('#MenuLevelTwo').val()});		
}
if(mnlevel=='2')
{
FncallPageGrid(this,'Table3',{spname:'Sam_smenurightviewlevel',Param:$('#Menulevel').val(),brid:$('#MenuLevelTwoID').val(),MnuId:$('#MenuLevelOne').val()+ ',' +$('#MenuLevelTwo').val()});		
}
			
			
			
        } 
		else 
		{
            return;
        }
    });
}
 
 });
 
 
 
 
 
 
  $(document).on('click', '#Save', function(){
       // $(document).on('click', '#Table1 tbody tr', function () {
		   
		   var data1="";
		   if($("input:checked" ).length == 0)
	{
	//window.alert("Please Select a File");
	window.alert(LoadFrmXML("V0110"));
	$("input:checked" ).prop( "checked", false );
    }
	
	

	
	

	for(i=0; i<$("input:checked" ).length;i++)
	{
		
	for(var j=1;j<$("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td').length;j++)
    {
		data1 += $($("#Table1").find($('input:checkbox[name=selectchk]:checked')[i]).closest('tr').find('td'))[j].innerHTML+",";
	}
		
		data1 +="|";
	
	}
	
	ChkValues(data1);
	
	
    
	
	
                $("#popup").dialog("close");

            });

			
			
			
			function Usersgridview()
			{
			
			 if (document.getElementById("Menulevel").value == "0") 
			 {
				if($("#Table2_wrapper").is(':visible')){ 
					$("#Table2_wrapper").hide();
				//$("#Rgtsgridviewlevel").trigger("click");
	FncallPageGrid(this,'Table3',{spname:'Sam_smenurightviewlevel',Param:$('#Menulevel').val(),brid:$('#MenuID').val(),MnuId:$('#MenuLevelOne').val()+ ',' +$('#MenuLevelTwo').val()});		
				}
				else
				{
	//$("#Rgtsgridviewlevel").trigger("click");
	FncallPageGrid(this,'Table3',{spname:'Sam_smenurightviewlevel',Param:$('#Menulevel').val(),brid:$('#MenuID').val(),MnuId:$('#MenuLevelOne').val()+ ',' +$('#MenuLevelTwo').val()});
				}
				 
			 }
			  if (document.getElementById("Menulevel").value != "1") 
			 {		 
				return;
			 }
			 if (document.getElementById("Menulevel").value != "2") 
			 {
				return;
			 }

			}
			function Usersgridview1()
			{
			  if (document.getElementById("Menulevel").value == "1") 
			 {		 
			 
			 if($("#Table2_wrapper").is(':visible')){ 
					$("#Table2_wrapper").hide();
		FncallPageGrid(this,'Table3',{spname:'Sam_smenurightviewlevel',Param:$('#Menulevel').val(),brid:$('#MenuLevelOneID').val(),MnuId:$('#MenuLevelOne').val()+ ',' +$('#MenuLevelTwo').val()});		
				}
				else
				{
		FncallPageGrid(this,'Table3',{spname:'Sam_smenurightviewlevel',Param:$('#Menulevel').val(),brid:$('#MenuLevelOneID').val(),MnuId:$('#MenuLevelOne').val()+ ',' +$('#MenuLevelTwo').val()});		
				}
			 }
			 	  if (document.getElementById("Menulevel").value != "0") 
			 {		 
				return;
			 }
			 if (document.getElementById("Menulevel").value != "2") 
			 {
				return;
			 }
			}
			
			function Usersgridview2()
			{
			 
			 if (document.getElementById("Menulevel").value == "2") 
			 {
			 if($("#Table2_wrapper").is(':visible')){ 
					$("#Table2_wrapper").hide();
			//	$("#Rgtsgridviewlevel").trigger("click");
	FncallPageGrid(this,'Table3',{spname:'Sam_smenurightviewlevel',Param:$('#Menulevel').val(),brid:$('#MenuLevelTwoID').val(),MnuId:$('#MenuLevelOne').val()+ ',' +$('#MenuLevelTwo').val()});		
				}
					else{
	FncallPageGrid(this,'Table3',{spname:'Sam_smenurightviewlevel',Param:$('#Menulevel').val(),brid:$('#MenuLevelTwoID').val(),MnuId:$('#MenuLevelOne').val()+ ',' +$('#MenuLevelTwo').val()});
				}
			 }
			}