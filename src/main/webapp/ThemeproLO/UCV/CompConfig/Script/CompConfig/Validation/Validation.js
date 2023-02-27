
        function validateField(){
            

            
               
			 var data;

		data = new FormData();
			data.append( 'id', $( '#id' ).val() );
			data.append( 'name', $( '#name' ).val() );
			data.append( 'description', $( '#description' ).val() );

			$.ajax({
				url: window.location.origin+'/jw/web/console/directory/user/submit/create',
				type: 'POST',
				data: data,
				enctype: 'multipart/form-data', 
				contentType: false,
				processData: false,
				success: function ( data ) {
				alert("User Created");
				}
				});
            
        }

function OnChngeSetVal()
{

var op= UI_IntrData("","","","","","SCF_sFEPGetCoOpertCde",'INTR1');


	 var DrpVal=""
	 
	 
	 for ( i=0;i<$(op).find('a').length;i++)
	 {
DrpVal= '<option value='+$($(op).find('a')[i]).find('CpCde').text() +'>'+ $($(op).find('a')[i]).find('CpCde').text()+'</option>'
		
		 $("#id").append(DrpVal)
		 $('#id').material_select();
		 
	 }

}


function OnChngeSetCompVal(FldVal,AssgnVal)
{
$("#"+AssgnVal).val($("#"+FldVal+" option[value='" + $( "#"+FldVal).val() + "']").text())
}


function validateField()
{
 var data;

		data = new FormData();
			data.append( 'id','C1923434' );
			data.append( 'name', 'Namokar Trading' );
			data.append( 'description', $('#description').val() );
			
			$.ajax({
				url: window.location.origin+'/jw/web/console/directory/dept/submit/create?orgId=Adani&parentId=',
			 	type: 'POST',
				data: data,
				enctype: 'multipart/form-data', 
				contentType: false,
				processData: false,
				success: function ( data ) {
				alert("Company Created");
				}
				});
}