
function fetchWFName()
{ $('#ReWorkFlowName').empty();
	$.ajax({
    url: "ThemeproLO/UI_FetchWrkflowname",
    data: {  },
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

             option.value =$.trim(item);
            option.innerHTML = item;   
           
           
                document.getElementById("ReWorkFlowName").appendChild(option);
          
        }
    }
});
FetchQueueName()
	}
function FetchQueueName()
{
	$('#ReQueueName').empty();
	var WorkFlowName=$('#ReWorkFlowName').val();
	$.ajax({
	    url: "ThemeproLO/UI_FetchQueuenamefrRearge",
	    data: { WorkFlowName:WorkFlowName },
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

	             option.value =$.trim(item);
	            option.innerHTML = item;   
	           
	           
	                document.getElementById("ReQueueName").appendChild(option);
	          
	        }
	    }
	});
	}

function getQIconValue(FromID,ToID)
{
	var x = document.getElementById(FromID);
var listval = "";
for (var i = 0; i < x.options.length; i++) {
  //  listval = listval + "<Data>";
   // listval = listval + "<value>";
	if(i==x.options.length-1){
		  listval = listval + x.options[i].value;
	}
	else{
    listval = listval + x.options[i].value+',';
	}
   // listval = listval + "</value>";
   // listval = listval + "</Data>";
}
$('#'+ToID).val(listval);
	}
function getValue() {
    var x = document.getElementById("ReQueueName");
    var listval = "";
    for (var i = 0; i < x.options.length; i++) {
        listval = listval + "<Data>";
        listval = listval + "<value>";
        listval = listval + x.options[i].value;
        listval = listval + "</value>";
        listval = listval + "</Data>";
    }
    $('#FromLBValue').val(listval);
}
function listbox_move(listID, direction) {

    var listbox = document.getElementById(listID);
    var selIndex = listbox.selectedIndex;

    if (-1 == selIndex) {
		window.alert(LoadFrmXML("V0129"));
      //  alertify.alert("Please select an option to move.");
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
function DispQIconRIght()
{$('#EditQIconRight').empty();
	
var FromLBQVal=$('#FromLBQVal').val();
var FromLBQValArray=FromLBQVal.split(',');
if (FromLBQVal != "") {
	 for (var m = 0; m < FromLBQValArray.length; m++) {
		 var option = document.createElement('option');

         var item = FromLBQValArray[m];

        option.value =$.trim(item);
       option.innerHTML = item;   
      
      
           document.getElementById("EditQIconRight").appendChild(option);
	 }
}
//alert(FromLBQVal)
var Matchvalue='Accept,Review,Forward,History';
//var Matchvalue=$('#EditQIconLeft').val();
var MatchvalueArr=Matchvalue.split(',');
$('#EditQIconLeft').empty();
	 for (var i = 0; i < FromLBQValArray.length; i++) {
		 var y=FromLBQValArray[i]
		 for(var n=0;n < MatchvalueArr.length; n++)
			{var x=MatchvalueArr[n];
			
			 
	 if(x==y)
		 {
		 //alert(x+y);
		// var optionz = document.createElement('option');
		// var item = x;
		// optionz.value =$.trim(item);
		// optionz.innerHTML = item;
		
		 MatchvalueArr = jQuery.grep(MatchvalueArr, function(value) {
			  return value != x;
			});
		 
	      
		 }
	 
	 }
		 
	}
	  //alert(MatchvalueArr)
	   for (var z = 0; z < MatchvalueArr.length;z++) {
		 var optionz = document.createElement('option');

         var itemz = MatchvalueArr[z];

        optionz.value =$.trim(itemz);
       optionz.innerHTML = itemz;   
      
      
           document.getElementById("EditQIconLeft").appendChild(optionz);
	 }
	 //document.getElementById("EditQIconLeft").appendChild(optionz);
	}


function QIconLeftOption()
{
	//alert(hi)
	 var option = document.createElement('option');
	 option.value ='Accept';
	 option.innerHTML = 'Accept'
	 option.value ='Review';
	 option.innerHTML = 'Review'
	 option.value ='Forward';
	 option.innerHTML = 'Forward'
	 option.value ='History';
	 option.innerHTML = 'History'
	 document.getElementById("QIconLeft").appendChild(option);
	}