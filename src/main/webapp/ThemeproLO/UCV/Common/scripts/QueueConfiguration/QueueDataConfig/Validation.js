function WhereConditiondrop()
{  var x = document.getElementById("lstRight");
var listval = "<Data>";
for (var i = 0; i < x.options.length; i++) {
   // listval = listval + "<Data>";
    listval = listval + "<value>";
    listval = listval + x.options[i].value;
    listval = listval + "</value>";
  //  listval = listval + "</Data>";
}
listval = listval + "</Data>";
//$('#FromLBVal').val(listval);
	 var str_xml = listval;
     var parser_xml = new DOMParser();
     var oXml = parser_xml.parseFromString(str_xml, "text/xml");
     var obj_elementcol = oXml.documentElement;
$('#WrConditionClm').empty();
     for (var i = 0; i < obj_elementcol.getElementsByTagName('value').length; i++) {

         var option = document.createElement('option');

           var item = obj_elementcol.getElementsByTagName('value')[i].textContent;
//
          option.value =$.trim(item);
         option.innerHTML = item;   
        
        
             document.getElementById("WrConditionClm").appendChild(option);
        $("#WrConditionClm option[value='" + $("#HWrConditionClm").val()+ "']").attr("selected", "true");
         	
           }
   
	}

function clearQueue()
{
	//document.getElementById('QueueName').value='';
	document.getElementById('TableName').value='';
	//document.getElementById('lstRight').value='';
	$('#lstRight').empty();
	$('#lstLeft').empty();
	$('#WrConditionClm').empty();
	}


function SelectedDropVal(id){
	//var val=$("#H"id).val();
	var x=$("#"+id+" option:selected").val()
	 $("#H"+id).val(x)

	}

