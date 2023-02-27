
function LoadCheckLSTDropDown(){
	var stm=$("#DMY14").val()	
	var obj= JSON.parse(stm)
	//$(".GECLDROPDOWN").append('<option value="" selected>--Select--</option>');
	
 $("#GECL_INDUSNATUR").append('<option value="" selected>--Select--</option>')
  $("#GECL_CHIEFPROMO").append('<option value="" selected>--Select--</option>')
   $("#GECL_ENTITYTYPE").append('<option value="" selected>--Select--</option>')
    $("#GECL_BORROWTYPE").append('<option value="" selected>--Select--</option>')
	
	$("#GECL_INDUSNATUR").append(obj.INDUSTRYNATURE);
	$("#GECL_CHIEFPROMO").append(obj.CHIEFPROMOTERGENDER);
	$("#GECL_ENTITYTYPE").append(obj.TYPEOFENTITY);
	$("#GECL_BORROWTYPE").append(obj.TYPEOFBORROWER);
}

function CheckLSTDropDownOnChng(ChngVal){
	$("#GECL_INDUSSEC").empty();
	$("#GECL_INDUSSEC").val('');			
	$("#GECL_INDUSSEC").material_select('destory');
	var op = UI_getdata(ChngVal,"","","","","LSW_SCHKLSTDROPDWNONCHNG")
	
	$("#GECL_INDUSSEC").append('<option value="" selected>--Select--</option>') 
    		
	$("#GECL_INDUSSEC").append($(op).find("RESULT").html());
	$("#GECL_INDUSSEC").material_select();
}
function CheckLSTDropDownOnChng1(){
	var oldval = $("#GECL_INDUSSEC").val()
	$("#GECL_INDUSSEC").empty();
	$("#GECL_INDUSSEC").val('');			
	$("#GECL_INDUSSEC").material_select('destory');
	var op = UI_getdata($("#GECL_INDUSNATUR").val(),"","","","","LSW_SCHKLSTDROPDWNONCHNG")
	
	$("#GECL_INDUSSEC").append('<option value="">--Select--</option>') 
    		
	$("#GECL_INDUSSEC").append($(op).find("RESULT").html());
	$("#GECL_INDUSSEC").find("option[value='"+oldval+ "']").attr("selected","selected");
	$("#GECL_INDUSSEC").material_select();
}

