 
 
<!--Copyright-->
<!--<div class="footer-copyright">
<div class="container-fluid">
©2019 Adani Capital </a>
</div>
</div>-->
<!--/.Copyright-->
    <script>
        $("#navigation").load("components/navigation.html");
    </script>

    <!-- Bootstrap dropdown -->
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/popper.min.js${DMY13}"></script>

    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/bootstrap.min.js${DMY13}"></script>

    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/mdb.min.js${DMY13}"></script>
    
    <!-- Customizer -->
    <script type="text/javascript" src="ThemeproLO/Common/FEP/js/customizer.min.js${DMY13}"></script>
 
<!--  <script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables.min.js${DMY13}"></script>
<script type="text/javascript" src="ThemeproLO/Common/FEP/js/Grid/datatables-select.min.js${DMY13}"></script> -->
 
 <script src="ThemeproLO/Common/scripts/UI/jquery.xml2json.js${DMY13}" type="text/javascript"></script>
<script type="text/javascript" src="ThemeproLO/Common/scripts/Commonfiles/loadjson_V_19.js${DMY13}"></script>
 
 <script>
 

 
 //$("#TxtCpmName").html(GetCurrentUserFName());
 
 
        // Data Picker Initialization
       

$(function(){
      //$(".datepicker").datepicker();
	   //$('.datepicker').pickadate({editable:true,selectYears:true,selectMonths:true,format: 'dd-mm-yyyy'});
	   
	   var $input = $('.datepicker').pickadate({
    editable: 'true',
	format: 'dd-mm-yyyy',
    onClose: function() {
        $('.datepicker').focus();
    }
});

var picker = $input.pickadate('picker');
$input.on('click', function(event) {
    if (picker.get('open')) {
        picker.close();
    } else {
        picker.open();
    }                        
    event.stopPropagation();
});
	   
});


        // Material Select Initialization
        $(document).ready(function() {
            $('.mdb-select').material_select();
			
		/*	$(".datepicker").click(function() {
        $(this).datepicker().datepicker( "show" )
    });*/
			
			$("body").removeClass("fixed-sn");
			
			if($("#NoofIns").length >= 1)
			{
				if($("#NoofIns").text() == 0)
				{
				$("#NoofIns").parent().hide();
				$("#TotAmt").parent().hide();
				}
				else
				{
						$("#NoofIns").parent().show();
				$("#TotAmt").parent().show();
				}
			}
			
				$(".fixed-action-btn ul").hide();
				
				 $(document).on("click", "#mycalendar .monthly-event-list .item-has-event .listed-event" , function() {

											

					var IOP1 = window.location.origin;

					var Mnuid='30j';

					var FormColor='DarkBlue';

					var FormName="Due Date - "+$(this).parent('div').attr("data-number")+ '-' +$(".monthly-header-title-date").text().replace(" ","-");

					var FormAction='Calender';

					var PrMs1='';

					

					var RedirectURL = IOP1+"/TPLSW/GetNextNavAction?MnuID="+Mnuid+"&Action=View&FormColor="+FormColor+"&FormName="+FormName+"&FormAction="+FormAction+"&PrMs1="+PrMs1+"&PrMs2="+$(this).parent('div').attr("data-number")+ '-' +$(".monthly-header-title-date").text().replace(" ","-");

					$(location).attr('href',RedirectURL);

											

			});

			
        });

        // Sidenav Initialization
        $(".button-collapse").sideNav();

		$('#draggable').draggable();
		
        // Tooltips Initialization
        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
		
	      $(function() {


if(document.readyState === 'complete') {
    //write code here
	//$(".spinner-grow").hide();
}
		  
 window.onunload = function() {

   // AppliLogout();
	
}
	 })	
		
    </script>
	
	<script>
	
	 if($("#slide-out").length == 1)
 {
    jQuery(jQuery(document).find("#slide-out").find("ul").find('li').find('a')[0]).trigger("click");	
	$($("#slide-out").find("ul").find('li').find('ul').find('li')[0]).click();
 }
	
function goBack() {
  window.history.back();
}
</script>
 