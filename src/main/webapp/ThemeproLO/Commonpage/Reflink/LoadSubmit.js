$(document).ready(function () {
	
		LoadMultiData("","","","RFERLINK","OWNADBfields","LSW_SGETREFLINK");
		
		 $(document).on("click", ".DeleteREF" , function() {

	         
			  if(confirm('Delete Refernce Link') == true)
		 		{
		     $(this).closest('.DYNROW').remove()	
			
				}
          })
		  
		  
$('.FormSave').on('click', function() {
		
 
	//var FormXML =submitdata("RELINK");
	
	var FormXML = TxtGridsubmitdata_V2("RFERLINK","OWNA_","LEVD_","OWNADBfields"); 
	
	
	
	var xml=UI_getdata("","",FormXML,"","","LSW_SINSERTREFLINK")
	var RESULT=$(xml).find('Result').html();	
//<Form><Details><ENGNAME>link</ENGNAME><URL>GOOGLE</URL></Details></Form>	
	
   if(RESULT=="Success")
	   {
	   alert("Data Saved Sucessfully")
	   }
	});
	

	
	
	
});

