$(document).ready(function () {


    var OPJSON= UI_getdata('','','','','','SCF_SFEPMyLiabilitiesCalendr')
    var Month=$(OPJSON).find('Result').text();

	var sampleEvents =  JSON.parse(Month)
	
	/* {
	"monthly": [
		{
		"id": 1,
		"name": "50,000",
		"startdate": "2019-07-01",
		"enddate": "2019-07-01",
		"starttime": "12:00",
		"endtime": "2:00",
		"color": "#99CCCC",
		"url": ""
		},
		{
		"id": 2,
		"name": "80,000",
		"startdate": "2019-07-03",
		"enddate": "2019-07-03",
		"starttime": "12:00",
		"endtime": "2:00",
		"color": "#CC99CC",
		"url": ""
		},
		{
		"id": 3,
		"name": "90,000",
		"startdate": "2019-07-04",
		"enddate": "",
		"starttime": "",
		"endtime": "",
		"color": "#666699",
		"url": ""
		},
		{
		"id": 8,
		"name": "50,000",
		"startdate": "2019-07-05",
		"enddate": "",
		"starttime": "",
		"endtime": "",
		"color": "#666699",
		"url": ""
		},
		{
		"id": 4,
		"name": "10,000",
		"startdate": "2019-07-07",
		"enddate": "",
		"starttime": "12:00",
		"endtime": "02:00",
		"color": "#996666",
		"url": ""
		},
		{
		"id": 5,
		"name": "30,000",
		"startdate": "2019-07-25",
		"enddate": "2019-07-25",
		"starttime": "",
		"endtime": "",
		"color": "#999999",
		"url": ""
		},
		{
		"id": 6,
		"name": "Test events on same day",
		"startdate": "2019-07-25",
		"enddate": "",
		"starttime": "",
		"endtime": "",
		"color": "#99CC99",
		"url": ""
		},
		{
		"id": 7,
		"name": "Test events on same day",
		"startdate": "2019-11-25",
		"enddate": "",
		"starttime": "",
		"endtime": "",
		"color": "#669966",
		"url": ""
		},
		{
		"id": 9,
		"name": "Test events on same day",
		"startdate": "2019-11-25",
		"enddate": "",
		"starttime": "",
		"endtime": "",
		"color": "#999966",
		"url": ""
		}
	]
	}; */

	$(window).load( function() {
		$('#mycalendar').monthly({
			mode: 'event',
			dataType: 'json',
			events: sampleEvents
		});
	});


});
  
  
 
  
 
  
  function OnError1(xmlRequest) {
	     alertify.alert(LoadFrmXML("V0076"));
	}