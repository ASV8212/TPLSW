$(document).ready(function () {
	

	
//	FormDataFromDB("LSW_TLOANDETAILS","LODE_","LODEDBfields", "");
	
	
    $("#BTNMONTH").click();
	
		oTable = $('#Table2').DataTable();
		$('#SearchTable2').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
	
		 var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
    var date = new Date();

      var Date2 = months[date.getMonth()] + ' ' + date.getFullYear();
	  
	  $("#DATE").val(Date2)
	
$(".DOWNLOAD").click(function()
			{
		$("#VENEXPORT").click();
	
			})		

$(".EXPORT").click(function()
			{
		$("#EXPORT").click();
	
			})				
		
});
