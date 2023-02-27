$(document).ready(function () {
	
$(".FormMainTab1").hide();
	
$("#CRATBY").val($("#userDropdown").find('span').text());
$("#MODFYBY").val($("#userDropdown").find('span').text());


getStateName();

$("#BTNIFSCMST").click();

oTable = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	

       $(".FormSave").click(function()
		{
			
			if($(this).text()=="Save")
			{
			 var MndtryChk = ChkMandatoryFlds("Mndtry");
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}
			}
			
			
	if(confirm('Are you sure you want to '+$(this).text()+' the Record') == true)
	 
	 {
			
				
    	   var xml = submitdata("DBfields");
    	   var IFSC=$("#IFSC").val();
    	   
    	   var op=UI_getdata(xml,IFSC,$(this).text(),"","","LSW_SINSIFSCMST")
    	   
    	   if($(op).find('Result').text() == "N")
    		   {
    		    alert($(op).find('MSG').text())
    		    return false;
    		   }
    	   else
    		   {
    		     alert($(op).find('MSG').text())
				 location.reload();
    		   }
			   
	 }
		})
});
