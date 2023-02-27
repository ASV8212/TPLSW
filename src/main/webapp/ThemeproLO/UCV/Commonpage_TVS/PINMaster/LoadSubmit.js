$(document).ready(function () {
	
$(".FormMainTab1").hide();
	
$("#CRATBY").val($("#userDropdown").find('span').text());
$("#DATEMODIFY").val($("#userDropdown").find('span').text());
getStateName();


FncallMyAppl(this,'Table3',{spname:'LSW_SGETPINVIEW',DBSrc:'currentProfile',TableHeader:'card-headerGridAsh',Mode:'',Param:$('#statenameDrop').val(),brid:'',MnuId:''},{0:$('#LOCC_BrID'),1:$('#LOCC_BrName')},'||','DocumentPIN');

  	
oTable = $('#Table3').DataTable();
		$('#SearchTable3').keyup(function(){
		      oTable.search($(this).val()).draw() ;
		})	
	
	
		
	  $(".FormSave").click(function()
		{
    	   var MndtryChk = ChkMandatoryFlds("Mndtry");
			if(MndtryChk == "Mandatory")
				{
				alert("Fill the Mandatory Fields");
				return false;
				}

		   if(confirm('Are you sure you want to '+$(this).text()+' the Record') == true)
	 
	   {
			
    	   var xml = submitdata("DBfields");
    	   var IFSC=$("#pincode").val();
    	   
    	   var op=UI_getdata(xml,IFSC,$(this).text(),"","","LSW_SINSPINMST")
    	   
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
