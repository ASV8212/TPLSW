function FncallwebserviceChart(cntrl, ID, Type, fnname, par, control1, hdncolumn, enablecontrol) {
    var popTable;
	var WfName=""
    sessionStorage.setItem('SessionMICRCODE', '0');
	var par={spname:'SAM_SChartDBPendingCount',Param:GetCurrentUser(),brid:WfName,MnuId:''};
	ajaxindicatorstart("Loading.. Please wait");
    $.ajax({
        url: "/ThemePro_LSW/GridView",
        type: "POST",
        async: false,
        //        data: par,
        data: par,
        //data: "{}",
      //  contentType: "application/json; charset=utf-8",
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        success: function (result) {
			ajaxindicatorstop();
			result = result.replace(/>null</g,"><");
        	json = $.xml2json(result.replace(/&/g,"and"));
        	
        	//return;
            if (JSON.stringify(json.a) === '{}') {
               	alert(LoadFrmXML("V0072"));

            }
			var a= JSON.parse(((JSON.stringify(json.a).replace(/~`/g, "/>")).replace(/`/g, "<")).replace(/__/g, " "))
            if (a == "[]") {
                alert("There is no Records");
            } else {
                if (Type == "Doughnut") {
                    handlejsonChart(ID, Type, a, control1, enablecontrol);
                }
                if (Type == "BarChart") {
                    handlejsonBarChart(ID, Type, a, control1, enablecontrol);
                }
            }
        },
        error: function (xhr, status, error) {
           	ajaxindicatorstop();
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}


function handlejsonChart(ID, Type, result, curcontl, hdncolumn, enablecontrol) {


    var dtData = [];
    var count = 0;
    myData = result;

    var entry;
    var name;
    entry = myData[0];


    var dtfilter = [];
    for (i = 0; i < myData.length; i++) {
        dtfilter.push(myData[i].Module);
    }

    var source =
            {
                datatype: "json",
                datafields: [{
                    name: "Module",
                    type: "string"
                }, {
                    name: "Count",
                    type: "number"
                }],
                localdata: myData
                 
            };

    var dataAdapter = new $.tis.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading  : ' + error); } });

    //var dtfilter = popAttributeFromData("Finacial Year", myData);
            // prepare tisChart settings
    var sampleData = myData;
                var settings = {
                title: "",
                description: "",
                enableAnimations: true,
                showLegend: true,
                showBorderLine: true,
                legendLayout: { left: 0, top: 0, width: 150, height: 200, flow: 'Vertical' },
                padding: { left: 5, top: 10, right: 5, bottom: 10 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
                source: dataAdapter,
                colorScheme: 'scheme03',
                seriesGroups:
                    [
                        {
                            type: 'pie',
                            showLabels: true,
                            series:
                                [
                                    { 
                                        dataField: 'Count',
                                        displayText: 'Module',
                                        labelRadius: 60,
                                        initialAngle: 15,
                                        radius: 80,
                                        centerOffset: 0,
										formatSettings: { sufix: '', decimalPlaces: 0 }

                                    }
                                ]
                        }
                    ]
            };
    $("#" + ID).tisChart(settings);


    var adapter = new $.tis.dataAdapter({
        datafields: [{
            name: "Module",
            type: "string"
        }, {
            name: "Count",
            type: "number"
        }],
        localdata: myData,
        datatype: 'array'
    });


    
}
