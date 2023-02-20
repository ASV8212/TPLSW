 function GetBorowClass()
{
	  
	var borowclass = UI_getdata("BORROWCLASS","","","","","LSW_SGETPRODVAL");
    $("#BOCL_BOROWCLASS").html("");
	$("#BOCL_BOROWCLASS").append($(borowclass).find("RESULT").html());
	$("#BOCL_BOROWCLASS").material_select(); 
}
 function GetSector()
{
	  
	var borowclass = UI_getdata("SECTORBR","","","","","LSW_SGETPRODVAL");
    $("#BOCL_SECTOR").html("");
	$("#BOCL_SECTOR").append($(borowclass).find("RESULT").html());
	$("#BOCL_SECTOR").material_select(); 
}