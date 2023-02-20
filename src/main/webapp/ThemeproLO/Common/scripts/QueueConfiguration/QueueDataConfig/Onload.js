$(document).ready(function () {
	
	var IOP=window.location.origin+'/'+LoadFrmXML("PG001");

		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= IOP;	
			return;
			}
			
					 var Resultval=FormRights();
	  if(Resultval!='Yes')
	 {
	 return;
	 }
			
    readonly();

    $(".rearrange").on("click", function () {
        $("#Rearrange").show();
        $(".EditDetails").hide();
        $(".ShowNewMenu").hide();
        $(".rearrhide").hide();
        if (document.getElementById('ReMenuLevel').value == '') 
        {
            $("#SubRemenuName").empty();
            $(".EditDetails").hide();
            $(".ShowNewMenu").hide();
            $(".rearrhide").hide();
            }
       // listbox_selectall('RemenuName', true);
    });



    //start
    $("#up").on("click", function () {
        listbox_move('lstRight', 'up');
        //alert("ok");
    });
    $("#down").on("click", function () {
        listbox_move('lstRight', 'down');
        //alert("ok");
    });
    //end
    $("#left").bind("click", function () {
        var options = $("[id*=lstRight] option:selected");
        for (var i = 0; i < options.length; i++) {
            var opt = $(options[i]).clone();
            $(options[i]).remove();
            $("[id*=lstLeft]").append(opt);
            WhereConditiondrop();
        }
    });
    $("#right").bind("click", function () {
        var options = $("[id*=lstLeft] option:selected");
        for (var i = 0; i < options.length; i++) {
            var opt = $(options[i]).clone();
            $(options[i]).remove();
            $("[id*=lstRight]").append(opt);
            WhereConditiondrop();
        }
    });


    $('#RearrSubmit').click(function () {
      
        //listbox_selectall('RemenuName', true);
        getValue();
		
		 var chkmndtry = ChkMandatoryFields("ISDBMndtry");
            if (chkmndtry == "No") {
                return;
            }
        
        //var XmlTxt = getValue();
        var FromLBVal = document.getElementById('FromLBVal').value;
        var XmlTxt = submitdata("ISDBfields");
        //  var XmlTxt = document.getElementById('RemenuName').value;
      //  var level = document.getElementById('ReMenuLevel').value;
  /* start*/
        
         $.ajax({
            url: "/ThemePro_LSW/UI_formdatains_QueueRearrangeEntryCheck",
            data: { xml: XmlTxt},
            async: false,
           // dataType: "json",
            type: 'POST',
            success: function OnSuccess_submit(data) {
                if (data == 'Success') {

                	  var Confirm = confirm("Already there are some entries in this table Do You want to any change?, \n Click 'Cancel' to Save as Draft \n Click 'Ok' to proceed");

                      if (Confirm == false) {
                         // DateChangeBack("ISDatefield");

                         // DateChangeBack("Dateshow");
                          return;

                      }
                      else {

                    	  $.ajax({
                              url: "/ThemePro_LSW/UI_formdatains_QueueRearrangeEntry",
                              data: { xml: XmlTxt},
                              async: false,
                             // dataType: "json",
                              type: 'POST',
                              success: function OnSuccess_submit(data) {
                                  if (data == 'Success') {

                                     // $("#Tab3").trigger("click");
                                     
                                     // alertify.alert("Data Saved");
									  alert(LoadFrmXML("V0108"));
                                      //document.getElementById('ReMenuLevel').value = '';
                                      $(".ClearTxt").empty();
                                      document.getElementById('WFName').value='';
                                      document.getElementById('QueueName').value='';
                                  	document.getElementById('TableName').value='';
                                  	//document.getElementById('lstRight').value='';
                                  	$('#lstRight').empty();
                                  	$('#lstLeft').empty();
                                  	$('#WrConditionClm').empty();
                                    //  $("#MainRemenuName").empty(); 
                                     // $("#SubRemenuName").empty();
                                  }
                                 
                              },
                              error: function OnError_submit(xmlRequest) {
									alert(LoadFrmXML("V0075"));
                                  //alertify.alert("Submission Failed");

                              }
                      });
                      }
                }
                else if (data == 'Fail')
                	{
                	 $.ajax({
                         url: "/ThemePro_LSW/UI_formdatains_QueueRearrangeEntry",
                         data: { xml: XmlTxt},
                         async: false,
                        // dataType: "json",
                         type: 'POST',
                         success: function OnSuccess_submit(data) {
                             if (data == 'Success') {

                                // $("#Tab3").trigger("click");
                                
                                // alertify.alert("Data Saved");
								 alertify.alert(LoadFrmXML("V0108"));
                                 //document.getElementById('ReMenuLevel').value = '';
                                 $(".ClearTxt").empty();
                                 document.getElementById('WFName').value='';
                                 document.getElementById('QueueName').value='';
                             	document.getElementById('TableName').value='';
                             	//document.getElementById('lstRight').value='';
                             	$('#lstRight').empty();
                             	$('#lstLeft').empty();
                             	$('#WrConditionClm').empty();
                               //  $("#MainRemenuName").empty(); 
                                // $("#SubRemenuName").empty();
                             }
                            
                         },
                         error: function OnError_submit(xmlRequest) {
							alert(LoadFrmXML("V0075"));
                             //alertify.alert("Submission Failed");

                         }
                 });
                 
                	}
               
            },
            error: function OnError_submit(xmlRequest) {
				alert(LoadFrmXML("V0075"));
               // alertify.alert("Submission Failed");

            }
    });
        
        
        
        
        
        
        
      /*  end */
     /*   $.ajax({
            url: "/ThemePro_LSW/UI_formdatains_QueueRearrangeEntry",
            data: { xml: XmlTxt},
            async: false,
           // dataType: "json",
            type: 'POST',
            success: function OnSuccess_submit(data) {
                if (data == 'Success') {

                   // $("#Tab3").trigger("click");
                   
                    alert("Data Saved");
                    //document.getElementById('ReMenuLevel').value = '';
                    $(".ClearTxt").empty();
                    document.getElementById('WFName').value='';
                    document.getElementById('QueueName').value='';
                	document.getElementById('TableName').value='';
                	//document.getElementById('lstRight').value='';
                	$('#lstRight').empty();
                	$('#lstLeft').empty();
                  //  $("#MainRemenuName").empty(); 
                   // $("#SubRemenuName").empty();
                }
               
            },
            error: function OnError_submit(xmlRequest) {
                alert("Submission Failed");

            }
    });*/
    });
});


function FetchTblColName()
{//$('#lstRight').empty();
	$('#lstLeft').empty();

			 //  $("#WrConditionClm").empty();
	var WFName=$('#WFName').val();
	var Tblname=$('#TableName').val();
	var QueueName=$('#QueueName').val();
    $.ajax({
        url: "/ThemePro_LSW/UI_FetchTblColName",
        data: { WFName:WFName,Tblname:Tblname ,QueueName:QueueName},
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function (data) {

         
            var str_xml = data;
            var parser_xml = new DOMParser();
            var oXml = parser_xml.parseFromString(str_xml, "text/xml");
            var obj_elementcol = oXml.documentElement;

            for (var i = 0; i < obj_elementcol.getElementsByTagName('row').length; i++) {

                var option = document.createElement('option');

                  var item = obj_elementcol.getElementsByTagName('row')[i].textContent;
   //
                 option.value =$.trim(item);
                option.innerHTML = item;   
               
               
                    document.getElementById("lstLeft").appendChild(option);
                  }

           

        }
    });
	
   //var options= $($("#lstRight").find('option')).clone()
   // $("#WrConditionClm").append(options);
   //var x=$("#WrConditionClm option:selected").val()
   //$("#HWrConditionClm").val(x)
    //WhereConditiondrop();
	}

function getValue() {
    var x = document.getElementById("lstRight");
    var listval = "";
    for (var i = 0; i < x.options.length; i++) {
        listval = listval + "<Data>";
        listval = listval + "<value>";
        listval = listval + x.options[i].value;
        listval = listval + "</value>";
        listval = listval + "</Data>";
    }
    $('#FromLBVal').val(listval);
}
function listbox_move(listID, direction) {

    var listbox = document.getElementById(listID);
    var selIndex = listbox.selectedIndex;

    if (-1 == selIndex) {
		alert(LoadFrmXML("V0129"));
        //alertify.alert("Please select an option to move.");
        return;
    }

    var increment = -1;
    if (direction == 'up')
        increment = -1;
    else
        increment = 1;

    if ((selIndex + increment) < 0 ||
        (selIndex + increment) > (listbox.options.length - 1)) {
        return;
    }

    var selValue = listbox.options[selIndex].value;
    var selText = listbox.options[selIndex].text;
    listbox.options[selIndex].value = listbox.options[selIndex + increment].value
    listbox.options[selIndex].text = listbox.options[selIndex + increment].text

    listbox.options[selIndex + increment].value = selValue;
    listbox.options[selIndex + increment].text = selText;

    listbox.selectedIndex = selIndex + increment;
}

function FetchAllData()
{
	//$('#QueueName').empty();
	$('#TableName').empty();
	$('#lstLeft').empty();
	$('#lstRight').empty();
	var WFName=$('#WFName').val();
	var QueueName=$('#QueueName').val();
    $.ajax({
        url: "/ThemePro_LSW/UI_FetchTblName",
        data: { WFName:WFName,QueueName:QueueName },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function (data) {

         
            var str_xml = data;
            var parser_xml = new DOMParser();
            var oXml = parser_xml.parseFromString(str_xml, "text/xml");
            var obj_elementcol = oXml.documentElement;

            for (var i = 0; i < obj_elementcol.getElementsByTagName('row').length; i++) {

            	$('#TableName').val(obj_elementcol.getElementsByTagName('row')[i].textContent); 
                  }

           

        }
    });

	}

function FetchInsTblColName()
{
	var WFName=$('#WFName').val();
	var QueueName=$('#QueueName').val();
	var TableName=$('#TableName').val();
	var param4='';
	var param5='';
	spname='Sam_sFetChInstColName'
	$.ajax({
		 url: "/ThemePro_LSW/UI_GetData",
       // url: "/ThemePro_LSW/UI_FetchInsertedTblColName",
        data: { param1:WFName,param2:QueueName,param3:TableName,param4:param4,param5:param5,spname:spname },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function (data) {
        	 var str_xml = $(data).find('option');
			  $("#lstRight").empty();
			   $("#WrConditionClm").empty();
        	 $("#lstRight").append(str_xml);
			   var options= $($("#lstRight").find('option')).clone()
    $("#WrConditionClm").append(options);
   var x=$("#WrConditionClm option:selected").val()
   $("#HWrConditionClm").val(x)
/*
         alert(data);
        	 var str_xml = data;
             var parser_xml = new DOMParser();
             var oXml = parser_xml.parseFromString(str_xml, "text/xml");
             var obj_elementcol = oXml.documentElement;

             for (var i = 0; i < obj_elementcol.getElementsByTagName('row').length; i++) {

                 var option = document.createElement('option');

                   var item = obj_elementcol.getElementsByTagName('row')[i].textContent;
    //
                  option.value =$.trim(item);
                 option.innerHTML = item;   
                
                
                     document.getElementById("lstRight").appendChild(option);
                   }
           
*/
        }
    });
	}

function ClearFields()
{
//$('#WFName').empty();
	document.getElementById('QueueName').value='';
	document.getElementById('TableName').value='';
	//document.getElementById('lstRight').value='';
	$('#lstRight').empty();
	$('#lstLeft').empty();
	$('#WrConditionClm').empty();
	//document.getElementById('lstLeft').value='';

	}
function clrtxtWF()
{

	$('#lstRight').empty();
	$('#WrConditionClm').empty();

}


/*

$(document).ready(function () {
	
	var IOP=window.location.origin+'/'+LoadFrmXML("PG001");

		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= IOP;	
			return;
			}
			
    readonly();

    $(".rearrange").on("click", function () {
        $("#Rearrange").show();
        $(".EditDetails").hide();
        $(".ShowNewMenu").hide();
        $(".rearrhide").hide();
        if (document.getElementById('ReMenuLevel').value == '') 
        {
            $("#SubRemenuName").empty();
            $(".EditDetails").hide();
            $(".ShowNewMenu").hide();
            $(".rearrhide").hide();
            }
       // listbox_selectall('RemenuName', true);
    });



    //start
    $("#up").on("click", function () {
        listbox_move('lstRight', 'up');
        //alert("ok");
    });
    $("#down").on("click", function () {
        listbox_move('lstRight', 'down');
        //alert("ok");
    });
    //end
    $("#left").bind("click", function () {
        var options = $("[id*=lstRight] option:selected");
        for (var i = 0; i < options.length; i++) {
            var opt = $(options[i]).clone();
            $(options[i]).remove();
            $("[id*=lstLeft]").append(opt);
            WhereConditiondrop();
        }
    });
    $("#right").bind("click", function () {
        var options = $("[id*=lstLeft] option:selected");
        for (var i = 0; i < options.length; i++) {
            var opt = $(options[i]).clone();
            $(options[i]).remove();
            $("[id*=lstRight]").append(opt);
            WhereConditiondrop();
        }
    });


    $('#RearrSubmit').click(function () {
      
        //listbox_selectall('RemenuName', true);
        getValue();
        //var XmlTxt = getValue();
        var FromLBVal = document.getElementById('FromLBVal').value;
        var XmlTxt = submitdata("ISDBfields");
        //  var XmlTxt = document.getElementById('RemenuName').value;
      //  var level = document.getElementById('ReMenuLevel').value;
  /* start*/
        
  /*     
         $.ajax({
            url: "/ThemePro_LSW/UI_formdatains_QueueRearrangeEntryCheck",
            data: { xml: XmlTxt},
            async: false,
           // dataType: "json",
            type: 'POST',
            success: function OnSuccess_submit(data) {
                if (data == 'Success') {

                	  var Confirm = confirm("Already there are some entries in this table Do You want to any change?, \n Click 'Cancel' to Save as Draft \n Click 'Ok' to proceed");

                      if (Confirm == false) {
                         // DateChangeBack("ISDatefield");

                         // DateChangeBack("Dateshow");
                          return;

                      }
                      else {

                    	  $.ajax({
                              url: "/ThemePro_LSW/UI_formdatains_QueueRearrangeEntry",
                              data: { xml: XmlTxt},
                              async: false,
                             // dataType: "json",
                              type: 'POST',
                              success: function OnSuccess_submit(data) {
                                  if (data == 'Success') {

                                     // $("#Tab3").trigger("click");
                                     
                                     // alertify.alert("Data Saved");
									  alertify.alert(LoadFrmXML("V0108"));
                                      //document.getElementById('ReMenuLevel').value = '';
                                      $(".ClearTxt").empty();
                                      document.getElementById('WFName').value='';
                                      document.getElementById('QueueName').value='';
                                  	document.getElementById('TableName').value='';
                                  	//document.getElementById('lstRight').value='';
                                  	$('#lstRight').empty();
                                  	$('#lstLeft').empty();
                                  	$('#WrConditionClm').empty();
                                    //  $("#MainRemenuName").empty(); 
                                     // $("#SubRemenuName").empty();
                                  }
                                 
                              },
                              error: function OnError_submit(xmlRequest) {
									alertify.alert(LoadFrmXML("V0075"));
                                  //alertify.alert("Submission Failed");

                              }
                      });
                      }
                }
                else if (data == 'Fail')
                	{
                	 $.ajax({
                         url: "/ThemePro_LSW/UI_formdatains_QueueRearrangeEntry",
                         data: { xml: XmlTxt},
                         async: false,
                        // dataType: "json",
                         type: 'POST',
                         success: function OnSuccess_submit(data) {
                             if (data == 'Success') {

                                // $("#Tab3").trigger("click");
                                
                                // alertify.alert("Data Saved");
								 alertify.alert(LoadFrmXML("V0108"));
                                 //document.getElementById('ReMenuLevel').value = '';
                                 $(".ClearTxt").empty();
                                 document.getElementById('WFName').value='';
                                 document.getElementById('QueueName').value='';
                             	document.getElementById('TableName').value='';
                             	//document.getElementById('lstRight').value='';
                             	$('#lstRight').empty();
                             	$('#lstLeft').empty();
                             	$('#WrConditionClm').empty();
                               //  $("#MainRemenuName").empty(); 
                                // $("#SubRemenuName").empty();
                             }
                            
                         },
                         error: function OnError_submit(xmlRequest) {
							alertify.alert(LoadFrmXML("V0075"));
                             //alertify.alert("Submission Failed");

                         }
                 });
                 
                	}
               
            },
            error: function OnError_submit(xmlRequest) {
				alertify.alert(LoadFrmXML("V0075"));
               // alertify.alert("Submission Failed");

            }
    });
        
        
        
        
        
        
        
      /*  end */
     /*   $.ajax({
            url: "/ThemePro_LSW/UI_formdatains_QueueRearrangeEntry",
            data: { xml: XmlTxt},
            async: false,
           // dataType: "json",
            type: 'POST',
            success: function OnSuccess_submit(data) {
                if (data == 'Success') {

                   // $("#Tab3").trigger("click");
                   
                    alert("Data Saved");
                    //document.getElementById('ReMenuLevel').value = '';
                    $(".ClearTxt").empty();
                    document.getElementById('WFName').value='';
                    document.getElementById('QueueName').value='';
                	document.getElementById('TableName').value='';
                	//document.getElementById('lstRight').value='';
                	$('#lstRight').empty();
                	$('#lstLeft').empty();
                  //  $("#MainRemenuName").empty(); 
                   // $("#SubRemenuName").empty();
                }
               
            },
            error: function OnError_submit(xmlRequest) {
                alert("Submission Failed");

            }
    });*/
   /* });
});
*/
/*
function FetchTblColName()
{//$('#lstRight').empty();
	$('#lstLeft').empty();

			   $("#WrConditionClm").empty();
	var WFName=$('#WFName').val();
	var Tblname=$('#TableName').val();
	var QueueName=$('#QueueName').val();
    $.ajax({
        url: "/ThemePro_LSW/UI_FetchTblColName",
        data: { WFName:WFName,Tblname:Tblname ,QueueName:QueueName},
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function (data) {

         
            var str_xml = data;
            var parser_xml = new DOMParser();
            var oXml = parser_xml.parseFromString(str_xml, "text/xml");
            var obj_elementcol = oXml.documentElement;

            for (var i = 0; i < obj_elementcol.getElementsByTagName('row').length; i++) {

                var option = document.createElement('option');

                  var item = obj_elementcol.getElementsByTagName('row')[i].textContent;
   //
                 option.value =$.trim(item);
                option.innerHTML = item;   
               
               
                    document.getElementById("lstLeft").appendChild(option);
                  }

           

        }
    });
	
   //var options= $($("#lstRight").find('option')).clone()
   // $("#WrConditionClm").append(options);
   //var x=$("#WrConditionClm option:selected").val()
   //$("#HWrConditionClm").val(x)
    //WhereConditiondrop();
	}

function getValue() {
    var x = document.getElementById("lstRight");
    var listval = "";
    for (var i = 0; i < x.options.length; i++) {
        listval = listval + "<Data>";
        listval = listval + "<value>";
        listval = listval + x.options[i].value;
        listval = listval + "</value>";
        listval = listval + "</Data>";
    }
    $('#FromLBVal').val(listval);
}
function listbox_move(listID, direction) {

    var listbox = document.getElementById(listID);
    var selIndex = listbox.selectedIndex;

    if (-1 == selIndex) {
		alertify.alert(LoadFrmXML("V0129"));
        //alertify.alert("Please select an option to move.");
        return;
    }

    var increment = -1;
    if (direction == 'up')
        increment = -1;
    else
        increment = 1;

    if ((selIndex + increment) < 0 ||
        (selIndex + increment) > (listbox.options.length - 1)) {
        return;
    }

    var selValue = listbox.options[selIndex].value;
    var selText = listbox.options[selIndex].text;
    listbox.options[selIndex].value = listbox.options[selIndex + increment].value
    listbox.options[selIndex].text = listbox.options[selIndex + increment].text

    listbox.options[selIndex + increment].value = selValue;
    listbox.options[selIndex + increment].text = selText;

    listbox.selectedIndex = selIndex + increment;
}

function FetchAllData()
{
	//$('#QueueName').empty();
	$('#TableName').empty();
	$('#lstLeft').empty();
	$('#lstRight').empty();
	var WFName=$('#WFName').val();
	var QueueName=$('#QueueName').val();
    $.ajax({
        url: "/ThemePro_LSW/UI_FetchTblName",
        data: { WFName:WFName,QueueName:QueueName },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function (data) {

         
            var str_xml = data;
            var parser_xml = new DOMParser();
            var oXml = parser_xml.parseFromString(str_xml, "text/xml");
            var obj_elementcol = oXml.documentElement;

            for (var i = 0; i < obj_elementcol.getElementsByTagName('row').length; i++) {

            	$('#TableName').val(obj_elementcol.getElementsByTagName('row')[i].textContent); 
                  }

           

        }
    });

	}

function FetchInsTblColName()
{
	var WFName=$('#WFName').val();
	var QueueName=$('#QueueName').val();
	var TableName=$('#TableName').val();
	var param4='';
	var param5='';
	spname='Sam_sFetChInstColName'
	$.ajax({
		 url: "/ThemePro_LSW/UI_GetData",
       // url: "/ThemePro_LSW/UI_FetchInsertedTblColName",
        data: { param1:WFName,param2:QueueName,param3:TableName,param4:param4,param5:param5,spname:spname },
        async: false,
        //dataType: "json",
        type: 'POST',
        success: function (data) {
        	 var str_xml = $(data).find('option');
			  $("#lstRight").empty();
			   $("#WrConditionClm").empty();
        	 $("#lstRight").append(str_xml);
			   var options= $($("#lstRight").find('option')).clone()
    $("#WrConditionClm").append(options);
   var x=$("#WrConditionClm option:selected").val()
   $("#HWrConditionClm").val(x)
   */
/*
         alert(data);
        	 var str_xml = data;
             var parser_xml = new DOMParser();
             var oXml = parser_xml.parseFromString(str_xml, "text/xml");
             var obj_elementcol = oXml.documentElement;

             for (var i = 0; i < obj_elementcol.getElementsByTagName('row').length; i++) {

                 var option = document.createElement('option');

                   var item = obj_elementcol.getElementsByTagName('row')[i].textContent;
    //
                  option.value =$.trim(item);
                 option.innerHTML = item;   
                
                
                     document.getElementById("lstRight").appendChild(option);
                   }
           
*/
/*
        }
    });
	}

function ClearFields()
{
//$('#WFName').empty();
	document.getElementById('QueueName').value='';
	document.getElementById('TableName').value='';
	//document.getElementById('lstRight').value='';
	$('#lstRight').empty();
	$('#lstLeft').empty();
	$('#WrConditionClm').empty();
	//document.getElementById('lstLeft').value='';

	}
function clrtxtWF()
{

	$('#lstRight').empty();
	$('#WrConditionClm').empty();

}
*/