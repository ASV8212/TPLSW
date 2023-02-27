function InboxList(WfName, id) {
    var DashTable, json, par;
	
	if (WfName=='Programme')
	{
		par = {
        spname: "SAM_sSCFgetAllPrgmView",
        Param: "",
        brid: "",
        MnuId: "",Prvnt:$(window.parent.document).find("#Prvnt").val()
		};
	}
	else
	{
		par = {
        spname: "SAM_sSCFgetAllApplicant",
        Param: GetCurrentUser(),
        brid: WfName,
        MnuId: "",Prvnt:$(window.parent.document).find("#Prvnt").val()
		};
	}
	
    if (ajaxindicatorstart("Loading.. Please wait"), $.ajax({
            url: "/ThemePro_SCF/GridView",
            type: "POST",
            async: !1,
            data: par,
            success: function(a) {
                ajaxindicatorstop(), a = a.replace(/>null</g, "><"), json = $.xml2json(a.replace(/&/g, "and")), "{}" === JSON.stringify(json.a) && alert(LoadFrmXML("V0072"))
            },
            error: function(xhr, status, error) {
                ajaxindicatorstop();
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message)
            }
        }), str = JSON.stringify(json.a).replace(/~`/g, "/>").replace(/`/g, "<").replace(/__/g, " "), -1 == str.indexOf("[")) var a = JSON.parse("[" + str + "]");
    else var a = JSON.parse(str);
    $.jgrid.gridUnload("#Table3"), $(".DBtabs").find("li").removeClass("active"), $(id).closest("li").addClass("active"), $("#Table3").jqGrid({
        datastr: a,
        editurl: "clientArray",
        datatype: "jsonstring",
        colModel: [{
            label: "Actions",
            name: "Actions",
            width: 40,
            key: !0,
            editable: !0,
            editrules: {
                required: !0
            }
        }, {
            label: "ID",
            name: "ID",
            width: 80,
            key: !0,
            editable: !0,
            editrules: {
                required: !0
            }
        }, {
            label: "Name",
            name: "Name",
            width: 100,
            key: !0,
            editable: !0,
            editrules: {
                required: !0
            }
        }, {
            label: "ActivityName",
            name: "ActivityName",
            width: 140,
            key: !0,
            editable: !0,
            editrules: {
                required: !0
            }
        }, {
            label: "Status",
            name: "Status",
            width: 80,
            key: !0,
            editable: !0,
            editrules: {
                required: !0
            }
        }, {
            label: "ProcessID",
            name: "ProcessID",
            width: 60,
            key: !0,
            editable: !0,
            hidden: !0,
            editrules: {
                required: !0
            }
        }, {
            label: "ActivityID",
            name: "ActivityID",
            width: 140,
            key: !0,
            editable: !0,
            hidden: !0,
            editrules: {
                required: !0
            }
        }, {
            label: "mode",
            name: "mode",
            width: 140,
            class: "dpass",
            hidden: !0,
            editable: !0
        }, {
            label: "State",
            name: "State",
            width: 100,
            hidden: !0,
            editable: !0
        }],
        sortname: "ID",
        sortorder: "asc",
        loadonce: !0,
        viewrecords: !0,
        width: 700,
        height: 138,
        rowNum: 6,
        pager: "#Table3Pager"
    }), $("#Table3").navGrid("#Table3Pager", {
        edit: !1,
        add: !1,
        del: !1,
        search: !0,
        refresh: !1,
        view: !1,
        position: "left",
        cloneToTop: !1
    }, {
        errorTextFormat: function(a) {
            return "Error: " + a.responseText
        }
    })
}
$(document).ready(function() {
    InboxList("", "")
});