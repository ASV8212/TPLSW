$(document).ready(function() {


    //$($('.AFormaccordion')[0]).click();
    //$("#BKDT_CUSID").val($(".FormPageMultiTab li.active").attr("id"));
	var op = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETACCNTNOBKREPAY");
	var CusName=$(op).find('RESULT').html();
	$("#AEND_ACCNTNO").append(CusName)
	
	
	//$("#AEND_ACCNTNO").materialSelect();
	
    FormDataFromDB("LSW_TENACHDTL", "AEND_", "AENDDBfields", "");

    /**Grid Trigger Start **/
    //$("#BTNBUSNSDTL").click();
    // $("#BTNEMPOWERMNT").click();
    /**Grid Trigger End **/
   RECOMMENDHIDE()
 
  
	
     if($("#AEND_ENACHVERIFY").val()=="Success")
	 {
		 $("[data-Validatedata=AEND_ENACHVERIFY]").text('Re-Initiate E-NACH');
	     $("[data-Validatedata=AEND_ENACHVERIFY]").addClass("btn-GrnInplain");	
	     $("[data-Validatedata=AEND_ENACHVERIFY]").removeClass("btn-yelInplain");
	     $("[data-Validatedata=AEND_ENACHVERIFY]").removeClass("btn-RedInplain"); 
	 }
	 else if($("#AEND_ENACHVERIFY").val()=="Failed")
	 {
		 $("[data-Validatedata=AEND_ENACHVERIFY]").text('E-NACH Failed');
	     $("[data-Validatedata=AEND_ENACHVERIFY]").removeClass("btn-GrnInplain");	
	     $("[data-Validatedata=AEND_ENACHVERIFY]").removeClass("btn-yelInplain");
	     $("[data-Validatedata=AEND_ENACHVERIFY]").addClass("btn-RedInplain");  
	 }
	 
	  var XML = UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETENCHBNKDETL");
	
	var Acct1=$("#AEND_ACCNTNO").val()
	var Acct2=$(XML).find('ACCTNO').text()
	
	if(Acct1 != Acct2)
	{
	    $("#AEND_ACCNTHLDRNAME").val($(XML).find('ACTHOLDNAME').text())
	    $("#AEND_BANKNAME").val($(XML).find('BNKNAME').text())
	    $("#AEND_ACCNTNO").val($(XML).find('ACCTNO').text())
        $('#AEND_ACCNTNO').material_select();
	
	   $("[data-Validatedata=AEND_ENACHVERIFY]").text('Initiate E-NACH');
	   $("[data-Validatedata=AEND_ENACHVERIFY]").removeClass("btn-GrnInplain");	
	   $("[data-Validatedata=AEND_ENACHVERIFY]").addClass("btn-yelInplain");
	   $("[data-Validatedata=AEND_ENACHVERIFY]").removeClass("btn-RedInplain"); 
	}
	 
	 $("#AEND_SATDATE").val($("#DMY7").val().split('|')[1])

	 //$("#AEND_ENDDATE").val($("#DMY7").val().split('|')[1].setMonth($("#DMY7").val().split('|')[1].getMonth() + $("#DMY3").val().split('|')[4]*12 ))
	 
	 var EMI=$("#DMY3").val().split('|')[6]
	 
	 $("#AEND_EMI").val(CURCommaSep(EMI))
	 $("#AEND_REPAYMONTH").val($("#DMY3").val().split('|')[4]*12)
addMonths()

    $(document).on("click", ".FormSave", function() {

        var html = $(this).closest('.DYNROW')
        var tbl = $(this).attr("data-aria").split("|")[0];
        var prfx = $(this).attr("data-aria").split("|")[1];
        var DATA = $(this).attr("data-aria").split("|")[2];

        if ($(this).text() == "Submit") {
            var MndtryChk = ChkMandatoryFlds(prfx + "Mndtry");
            if (MndtryChk == "Mandatory") {
                alert("Fill the Mandatory Fields");
                return false;
            }
        }
        // Customer Seq ID Gen Start		
        /*if ($(html).find("[name=BKDT_BNKNO]").val() == "") {
            var CUSID = UI_getdata("BNK", "", "Yes", "", "", "Sam_sGetSeqID");
            $(html).find("[name=BKDT_BNKNO]").val($(CUSID).find("Val1").text());
        }*/
        // Customer Seq ID Gen End 

        /*$("#BKDT_BNKREFNAME").val($(".FormPageMultiTab li.active a div").text())*/

       
        var CHKresult=FormDataToDB(tbl, prfx, '');

        
        if(CHKresult == "Fail")
   		{
   		  alert("Submission Failed");
   		   return false;			
   		}

        // Tab Header Change End


        if ($(this).text() == "Submit") {
            NXTTAB(this);
        }
    });


});