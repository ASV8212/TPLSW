$(function () {
    /*  $('ul.tabs li:first').addClass('active');
    $('.block article').hide();
    $('.block article:first').show();*/
	var IOP=window.location.origin+'';

    var TabCount = $('ul.tabs li').length;
    var activeTab1 = "";
    for (i = 0; i < TabCount; i++) {

        var $CHKDisplay = $('ul.tabs li')[i];

        var TabID = $CHKDisplay.id;

        if (document.getElementById(TabID).style.display == "") {

            $('#' + TabID).addClass('active');
            $('.block article').hide();
            $("[name='" + TabID + "']").show();

            var $ActiveTab = $CHKDisplay.childNodes;
            activeTab1 = $ActiveTab[0].hash;

            i = 100;
        }

    }



    var formid1 = document.getElementsByClassName('formIdentity')[0].id;

    var pathname = window.location.search;

    //alert(pathname);

    if (formid1 == "RptDashboard") {

        if (activeTab1 == "#tab0") {
            if (document.getElementById('iframeDshB').src == "")
                document.getElementById('iframeDshB').src = IOP+'/Birt/frameset?__report=report/CHFL/DashboardI.rptdesign&__format=html&__navigationbar=false'
            // setIframeHeight_First();
	   
        }
    }
   
  /*  if (formid1 == "AllForms") {

        if (activeTab1 == "#tab1") {
            if (document.getElementById('iframe1').src == "")
                document.getElementById('iframe1').src = "http://localhost:8080/ThemeproLO/Customer_Creation/Pages/Mainpage.jsp" + pathname;
            // setIframeHeight_First('iframe1');
        }*/
        
   // }


    $('ul.tabs li').on('click', function () {

    	// $('.main-content').myajaxfunc();

        $('ul.tabs li').removeClass('active');
        $(this).addClass('active')
        $('.block article').hide();
        
        var IOP=window.location.origin+'';
        var activeTab = $(this).find('a').attr('href');

        var formid = document.getElementsByClassName('formIdentity')[0].id;

        if (formid == "RptDashboard") {

        //    setIframeHeight_First();

            if (activeTab == "#tab1") {
                if (document.getElementById('iframe1').src == "")
                    document.getElementById('iframe1').src = IOP+'/Birt/frameset?__report=report/CHFL/DashboardII.rptdesign&__format=html&__navigationbar=false'
               // setIframeHeight('iframe1');
            }

            if (activeTab == "#tab2") {
                if (document.getElementById('iframe2').src == "")
                    document.getElementById('iframe2').src = IOP+'/Birt/frameset?__report=report/CHFL/DashboardIII.rptdesign&__format=html&__navigationbar=false'
              //  setIframeHeight('iframe2');
            }
			
			
				
			
            $(activeTab).show();
            return false;
        }

     /*   if (formid == "ProcessNote") {

            setIframeHeight_First();

            if (activeTab == "#tab1") {
                if (document.getElementById('iframe1').src == "")
                    document.getElementById('iframe1').src = IOP+"/ThemeproLO/Upto50L/Pages/U50LS1_ProcessNote.jsp" + pathname;
                setIframeHeight('iframe1');
            }

            if (activeTab == "#tab2") {
                if (document.getElementById('iframe2').src == "")
                    document.getElementById('iframe2').src = IOP+"/ThemeproLO/Upto50L/Pages/U50LS2_ProcessNote.jsp" + pathname;
                setIframeHeight('iframe2');
            }
            if (activeTab == "#tab3") {
                if (document.getElementById('iframe3').src == "")
                    document.getElementById('iframe3').src = IOP+"/ThemeproLO/Upto50L/Pages/U50LS3_ProcessNote.jsp" + pathname;
                setIframeHeight('iframe3');
            }
            if (activeTab == "#tab4") {
                if (document.getElementById('iframe4').src == "")
                    document.getElementById('iframe4').src = IOP+"/ThemeproLO/Upto50L/Pages/U50LS4_ProcessNote.jsp" + pathname;
                setIframeHeight('iframe4');
            }
            if (activeTab == "#tab5") {
                if (document.getElementById('iframe5').src == "")
                    document.getElementById('iframe5').src = IOP+"/ThemeproLO/Upto50L/Pages/U50LS5_ProcessNote.jsp" + pathname;
                setIframeHeight('iframe5');
            }

            $(activeTab).show();
            return false;
        }   */

        if (formid == "RptDashboard") {

            if (activeTab == "#tab1") {
                if (document.getElementById('iframe1').src == "")
                    document.getElementById('iframe1').src = IOP+"/ThemePro_LSW/LSW_FFinancials" + pathname;

                //setIframeHeight('iframe1');
            }

         /*   if (activeTab == "#tab2") {
                if (document.getElementById('iframe2').src == "")
                    document.getElementById('iframe2').src = IOP+"/ThemeproLO/Upto50L/Pages/U50L_Enclosures.jsp" + pathname;
                setIframeHeight('iframe2');
            }
            if (activeTab == "#tab3") {
                if (document.getElementById('iframe3').src == "")

                    document.getElementById('iframe3').src = IOP+"/ThemeproLO/Upto50L/Pages/U50L_ProcessNote.jsp" + pathname;
                setIframeHeight('iframe3');
            }
            if (activeTab == "#tab4") {
                if (document.getElementById('iframe4').src == "")
                    document.getElementById('iframe4').src = IOP+"/ThemeproLO/Upto50L/Pages/U50L_CreditRating.jsp" + pathname;
                setIframeHeight('iframe4');
            }
            if (activeTab == "#tab5") {
                if (document.getElementById('iframe5').src == "")
                    document.getElementById('iframe5').src = IOP+"/ThemeproLO/Upto50L/Pages/U50L_LoanSanctionOrder.jsp" + pathname;
                setIframeHeight('iframe5');
            } */

            $(activeTab).show();
            return false;
        }

    });
})



/*function setIframeHeight(iframe) {

    var x = document.getElementById("BodyMainContentH").value;

    if (x == "")
        x = 0;
    
    var formid = document.getElementsByClassName('formIdentity')[0].id;



    if (formid != "AllForms") {

        var element = window.parent.document;
        var activeTab = $(element).find('.active').find('a').attr('href');

        var Iframeid = GetIframefromTAB(activeTab);
        
        x = parseInt(x) + parseInt(document.getElementById(iframe).contentWindow.document.body.scrollHeight);
        parent.document.getElementById(Iframeid).style.height = x + "px";
    }

}

function resizeIframe(obj) {

    var ExstH = obj.style.height;

    //var obj = document.getElementById(iframe);

   // alert(obj.contentWindow.document.body.scrollHeight + 'px');
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
        
    //parent.document.getElementById('iframe1').style.height = parent.document.getElementById('iframe1').style.height + obj.style.height
    
   var x = document.getElementById("BodyMainContentH").value;

   if (x == "")
       x = 0;

var formid = document.getElementsByClassName('formIdentity')[0].id;

if (formid != "AllForms") {

    var element = window.parent.document;
    var activeTab = $(element).find('.active').find('a').attr('href');

    var Iframeid = GetIframefromTAB(activeTab);

    x = parseInt(x) + parseInt(obj.contentWindow.document.body.scrollHeight);
    parent.document.getElementById(Iframeid).style.height = x + "px";
}
   // alert();
    //obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';

 }


 function setIframeHeight_First() {

     if (document.getElementById("BodyMainContentH").value == "0") {
         document.getElementById("BodyMainContentH").value = "";
     }

     if (document.getElementById("BodyMainContentH").value == "") {

         var element = window.parent.document;
         var activeTab = $(element).find('.active').find('a').attr('href');

         var Iframeid = GetIframefromTAB(activeTab);

         var a = parent.document.getElementById(Iframeid).style.height;
         var b = document.getElementById('iframe1').style.height;

         if (a == "")
             a = 0;
         if (b == "")
             b = 0;
         a = a.replace("px", "");
         b = b.replace("px", "");
         a = parseInt(a) - parseInt(b);
         document.getElementById("BodyMainContentH").value = a;
     }


 }
*/
 function GetIframefromTAB(Tab) {
 
 if (Tab == "#tab0")
         return "iframe0";

     if (Tab == "#tab1")
         return "iframe1";

     if (Tab == "#tab2")
         return "iframe2";

    		 
	

 }