function UI_getdata(a, b, c, d, e, f) {
    var g = "";
    return $.ajax({
        url: "/ThemePro_LSW/UI_GetData",
        data: {
            param1: a,
            param2: b,
            param3: c,
            param4: d,
            param5: e,
            spname: f
        },
        async: !1,
        dataType: "text",
        type: "POST",
        complete: function(b) {
            g = b.responseText
        },
        error: function(a) {
            window.alert(LoadFrmXML("V0126")), g = "Fail"
        }
    }), g
}
