$(function () {
    /*  $('ul.tabs li:first').addClass('active');
    $('.block article').hide();
    $('.block article:first').show();*/
	var IOP='http://'+window.location.origin+' ';

    var TabCount = $('ul.tabs li').length;
    var activeTab1 = "";
    for (i = 0; i < TabCount; i++) {

        var $CHKDisplay = $('ul.tabs li')[i];

        var TabID = $CHKDisplay.id;

        if (document.getElementById(TabID).style.display == "") {

            $('#' + TabID).addClass('active');
            $('.PageContent').hide();
            $('.'+TabID).show();
            //$("[name='" + TabID + "']").show();
            $( "#C_"+TabID ).load( "SCF_FInvoiceMatch" );
            var $ActiveTab = $CHKDisplay.childNodes;
            activeTab1 = $ActiveTab[0].hash;

            i = 100;
        }

    }



    var formid1 = document.getElementsByClassName('formIdentity')[0].id;

    var pathname = window.location.search;

    //alert(pathname);

    if (formid1 == "SCF_FInvoiceMatching") {

        if (activeTab1 == "#tab1") {
           
        }
    }
 
    $('ul.tabs li').on('click', function () {

        $('ul.tabs li').removeClass('active');
        $(this).addClass('active')
        $('.block article').hide();
       
        var IOP=window.location.origin;
        var activeTab = $(this).find('a').attr('href');

        var formid = document.getElementsByClassName('formIdentity')[0].id;

        if (formid == "Programme") {

            if (activeTab == "#Tab1") {
                if ($('.Tab1').text() == "")
                	 $( "#C_Tab1").load( "SCF_FChargeDetails" );
                	 //document.getElementById('iframe2').src = IOP+"/ThemePro_LSW/SCF_FPostingDetails" + pathname;
                
            }

            /*if (activeTab == "#Tab2") {
                if ($('.Tab2').text() == "")
                	 $( "#C_Tab2").load( "SCF_FPostingDetails" );
            }
			
			if (activeTab == "#Tab3") {
                if ($('.Tab3').text() == "")
                	 $( "#C_Tab3").load( "SCF_FDocumentAttachment" );
            }*/
			
			 $('.PageContent').hide();
			var cTab=activeTab.substring(1,activeTab.length);
			$('.'+cTab).show();
            //$(activeTab).show();
            return false;
        }

    
        if (formid == "AllForms") {

            if (activeTab == "#Tab1") {
                if (document.getElementById('iframe1').src == "")
                	$( "#C_Tab1").load( "SCF_FChargeDetails" );

               
            }

            $(activeTab).show();
            return false;
        }

    });
})


 function GetIframefromTAB(Tab) {

 
 if (Tab == "#tab0")
         return "iframe0";
	 
     if (Tab == "#tab1")
         return "iframe1";

     if (Tab == "#tab2")
         return "iframe2";

     if (Tab == "#tab3")
         return "iframe3";
  


 }