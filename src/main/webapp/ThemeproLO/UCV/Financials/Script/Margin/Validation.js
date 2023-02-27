function GetNaturBusness_V1(Category,Nature,Cluster)
{
	var Category=$(Category).val();
	var xml=UI_getdata(Category,"","","","","LSW_SGETNATUROFBUSSINESS")
	
	$("#"+Nature).html("")
	$("#"+Nature).append($(xml).find("NATURE").html());
	$("#"+Nature).material_select();
	$("#"+Cluster).val('')

	
}
function GetAllServices()
{
	
	
	var xml=UI_getdata($("#MARG_INDUCAT").val(),$("#MARG_BUSSINDUS").val(),"","","","LSW_SALLSERVICES")
	$("#MARG_MANUFACT").val($(xml).find('Manufacturer').text())
       $("#MARG_TRADER").val($(xml).find('Trader').text())
	   $("#MARG_SERVICE").val($(xml).find('Service').text())
	
}
