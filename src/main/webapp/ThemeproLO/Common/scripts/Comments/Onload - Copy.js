 //var idleTime="";
 $(document).ready(function () {
	  
	   var IOP=window.location.origin+'/jw';
	 
	 var Rdpage = LoadFrmXML("PG001");
		SessionStChk();
		if (document.getElementById("SubmitSuccess").value=="InValid")
			{			
			window.location= Rdpage;	
			return;
			}
			
		/*			 var Resultval=FormRights();
	  if(Resultval!='Yes')
	 {
	 return;
	 }*/
	// window.alert('1');
		if($(window.parent.document).find(".boxy-wrapper").text()!="")
		{
		$('#tmelne').addClass("tmelnejpop");
		}
		else
		{
		$('#tmelne').addClass("tmelnepgvw");
		}
		

//Zero the idle timer on mouse movement. start		
var idleInterval = setInterval(timerIncrement, 500000); // 1 minute

 $(this).mousemove(function (e) {
         idleTime = 0;
    });
 $(this).keypress(function (e) {
        idleTime = 0;
 });

//Zero the idle timer on mouse movement. end	
	
	
	 $(".cmntbox").hide();
	 $('.Timeline').hide();
	 
	 var loggedinuser = getUrlParam("username");
	   document.getElementById("LoggedInUser").value=loggedinuser;
	   var loggedinuserfname = GetCurrentUserFName();
	    document.getElementById("LoggedInUserFnmae").value=loggedinuserfname;
	 var CreatedDate = get2dateTime();
	   document.getElementById("Created_Date").value=CreatedDate;
	   var bsndate=get2dateTime();
	   document.getElementById("Bsn_Date").value=bsndate;
	    
	var processid=getUrlParam("processId");
	var formid=getUrlParam("formid");
	fetchcmnts(processid,formid);
	//fetcttimelinedata();
	 
	/* if($(window.parent.document).find("form").find("#SubmitSuccess").val()=="IA")
	{
		$("#ADD1").hide();
		$("#Save").hide();	 
		$("#TableCmnts").find("input,button,select").attr("disabled", "disabled");
		//$("#TableCmnts").find("img").hide();
		//var a="";
	}*/

 if($(window.parent.document).find("form").find("#SubmitSuccess").val()=="IA" && $(window.parent.document).find("form").find("#assignmentComplete").is(':disabled')==true)
	{
		$(".addimg").hide();
		$("#Save").hide();	 
		$("#TableCmnts").find("input,button,select").attr("disabled", "disabled");
		//$("#TableCmnts").find("img").hide();
		//var a="";
	}

if($(window.parent.parent.document).find("form").find("#SubmitSuccess").val()=="Hist")
	{	
		$(".addimg").hide();
		$("#Save").hide();	 
		$("#TableCmnts").find("input,button,select").attr("disabled", "disabled");
		$("#tmelne").find("img").hide();
	}
	
	
	
	//for tab start
	
	 if(getUrlParam("View")=="IA" || getUrlParam("View")=="Hist")
	{
		$(".addimg").hide();
		$("#Save").hide();	 
		$("#TableCmnts").find("input,button,select").attr("disabled", "disabled");
		//$("#TableCmnts").find("img").hide();
		//var a="";
	}
		//for tab end
	
	
	
	
	var rowindexval;
	var rowliindex;
	var secindx;
	var liindx;
	var btnvalue;
	var remval;
	var mdtval;
	var clsebtn='Add';
	
	
	
	$(function() {
	    //----- OPEN
	    $('[data-popup-open]').on('click', function(e)  {
	        var targeted_popup_class = jQuery(this).attr('data-popup-open');
	        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
	 
	        e.preventDefault();
	    });
	    
	  	$(document).on('click', '#ADD1', function (e){
	    	btnvalue='Add';
				$('.clearDM').val('');
		    	// $('.Timeline').find('#ADD1').remove();
		    	 $('.Timeline').hide();
		    	 $('#addhdr').show();
		    	 $('#edithdr').hide();
		    	 $('#viewhdr').hide();
		    	 $('#GridBTNSb').show();
		    	 $('#GridBTNCn').show();
	    	 $('#Remarks').prop('disabled', false);
			  $('#Remarks').attr("readonly", false);
	        var targeted_popup_class = jQuery(this).attr('data-popup-open');
	        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
	 
	        e.preventDefault();
	    });
	    //----- CLOSE
	    $('[data-popup-close]').on('click', function(e)  {
	    	if($('#Remarks').val()!=''&&clsebtn=='Add'){
	    		window.alert('Click Submit to add your comments');
	    		
	    	}
	    	else{
	    		clsebtn='Add';	
	        var targeted_popup_class = jQuery(this).attr('data-popup-close');
	        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
	 
	        e.preventDefault();
	    	}
	    });
	    $('[data-popup-close1]').on('click', function(e)  {
	    	
	        var targeted_popup_class = jQuery(this).attr('data-popup-close1');
	        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
	 
	        e.preventDefault();
	    	
	    });
	    
	});

	
	
$(document).on('click', '#GridBTNSb', function (e) {

	
var InstVal='';
	
if ($("#Remarks").val()=='')
{
//alertify.alert("Enter Your Comments");
  
 window.alert("Enter Your Comments");
					//var targeted_popup_class = jQuery(this).attr('data-popup-closesbmt');
        	       // $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
        	 
					// e.preventDefault();
					// $('.Timeline').show();
					  
					return;

}

 ajaxindicatorstart("Loading.. Please Wait")

	if(btnvalue=='Add'){
		var loggedinuser = getUrlParam("username");
	    document.getElementById("LoggedInUser").value=loggedinuser;
		var loggedinuserfname = GetCurrentUserFName();
	    document.getElementById("LoggedInUserFnmae").value=loggedinuserfname;
	  var CreatedDate = get2dateTime();
	   document.getElementById("Created_Date").value=CreatedDate;
	    var bsndate=get2date();
	    document.getElementById("Bsn_Date").value=bsndate;
		var rowCount;
		//emptyrwdelte('TableCmnts');
		var secindxaddd=$("#tmelne").find("#ADD1").closest('section').index();
		var liindxadd=$("#tmelne").find("#ADD1").closest('li').index();
		$("#tmelne").find("#ADD1").closest('li').remove();
		
		//version no generation start
		
		var op= UI_getdata("CMTVRNO","","","","","Sam_sGetCOMSeqID");
		document.getElementById("Versionno").value= $(op).find("VR").text();
		
		//version no generation end

		rowCount = $('#tmelne section').length;        	// GET section COUNT.

if(liindxadd!=0)
{
	$('#tmelne section').eq(secindxaddd).find('li').eq(liindxadd-1).after(
//$('#tmelne section li').eq(-1).after(
		'<li class="CurrentUsr">'+
			 '<i class="roundsze bg-blue"></i><div class="timeline-item"><span class="time"><i class="fa fa-clock-o"></i></span>'+
			 '<h3 class="timeline-header">'+ $('#LoggedInUserFnmae').val()+'</h3>'+
			' <div class="timeline-body">'+ $('#Remarks').val()+'<br /></div>'+
			'<div class="versionno" style="display:none">'+$('#Versionno').val()+'</div>'+
			 '<div class="timeline-footer">'+
			 '<a class="btn btn-primary btn-xs GridViewBTN" data-popup-open="popup-1">Read More</a>&#160;&#160;<a class="btn btn-primary btn-xs  GridRowEditBTN" data-popup-open="popup-1">Edit</a>&#160;&#160;<a class="btn btn-primary btn-xs GridRowDeleteBTN" data-popup-open="popup-1">Delete</a>'+
			 '<span class="crdate"><i>'+$('#Created_Date').val()+'</i></span></div></div></li>'+
			 
			 '<li class="CurrentUsr">'+
			 '<i class="Curaddimg">'+
			 '<img data-popup-open="popup-1" style="float:right;" type="button" id="ADD1" name="ADD" style="width:30px;height:30px;" class="click" src="ThemeproLO/Common/Images/add-new.png"/>'+
			 '</i></li>'
			 
			 );
}

else{

$('#tmelne section').eq(secindxaddd).find('ul:last').append(
//$('#tmelne section li').eq(-1).after(
		'<li class="CurrentUsr">'+
			 '<i class="roundsze bg-blue"></i><div class="timeline-item"><span class="time"><i class="fa fa-clock-o"></i></span>'+
			 '<h3 class="timeline-header">'+ $('#LoggedInUserFnmae').val()+'</h3>'+
			' <div class="timeline-body">'+ $('#Remarks').val()+'<br /></div>'+
			'<div class="versionno" style="display:none">'+$('#Versionno').val()+'</div>'+
			 '<div class="timeline-footer">'+
			 '<a class="btn btn-primary btn-xs  GridViewBTN" data-popup-open="popup-1">Read More</a>&#160;&#160;<a class="btn btn-primary btn-xs ion ion-compose GridRowEditBTN" data-popup-open="popup-1">Edit</a>&#160;&#160;<a class="btn btn-primary btn-xs  GridRowDeleteBTN" data-popup-open="popup-1">Delete</a>'+
			 '<span class="crdate"><i>'+$('#Created_Date').val()+'</i></span></div></div></li>'+
			 
			 '<li class="CurrentUsr">'+
			 '<i class="Curaddimg">'+
			 '<img data-popup-open="popup-1" style="float:right;" type="button" id="ADD1" name="ADD" style="width:30px;height:30px;" class="click" src="ThemeproLO/Common/Images/add-new.png"/>'+
			 '</i></li>'
			 
			 );

}
InstVal=$('#LoggedInUser').val()+'|'+$('#Created_Date').val()+'|'+$('#Created_Date').val()+'|'+$('#Remarks').val()+'|'+$('#Versionno').val();
InstnVal(InstVal,"Add");

}
	
	else if(btnvalue=='Edit')
{

		if(   remval==$('#Remarks').val()){
			 document.getElementById("Bsn_Date").value=mdtval;
		}
		else{
		var bsndate=get2dateTime();
		document.getElementById("Bsn_Date").value=bsndate;
		}
		 //alert(rowindexval);
		// $('#tmelne section li').eq(rowliindex).remove();
		

		$('#tmelne section').eq(secindx).find('li').eq(liindx).remove();
		 
		var lilen=$('#tmelne section').eq(secindx).find('li').length;
		 
		 if(secindx ==0)
	{
			if(liindx==1&&lilen==1)
		{

				$('#tmelne section').eq(secindx).find('ul:last').append(
				
					'<li class="CurrentUsr">'+
					'<i class="roundsze bg-blue"></i><div class="timeline-item"><span class="time"><i class="fa fa-clock-o"></i></span>'+
					'<h3 class="timeline-header">'+ $('#LoggedInUserFnmae').val()+'</h3>'+
					' <div class="timeline-body">'+ $('#Remarks').val()+'<br /></div>'+
					'<div class="versionno" style="display:none">'+$('#Versionno').val()+'</div>'+
					'<div class="timeline-footer">'+
					'<a class="btn btn-primary btn-xs  GridViewBTN" data-popup-open="popup-1">Read More</a>&#160;&#160;<a class="btn btn-primary btn-xs ion ion-compose GridRowEditBTN" data-popup-open="popup-1">Edit</a>&#160;&#160;<a class="btn btn-primary btn-xs ion ion-compose GridRowDeleteBTN" data-popup-open="popup-1">Delete</a>'+
					'<span class="crdate"><i>'+$('#Bsn_Date').val()+'</i></span></div></div></li>'
					);
		}
		
		else
		{
		$('#tmelne section').eq(secindx).find('li').eq(liindx).before(
				
					'<li class="CurrentUsr">'+
					'<i class="roundsze bg-blue"></i><div class="timeline-item"><span class="time"><i class="fa fa-clock-o"></i></span>'+
					'<h3 class="timeline-header">'+ $('#LoggedInUserFnmae').val()+'</h3>'+
					' <div class="timeline-body">'+ $('#Remarks').val()+'<br /></div>'+
					'<div class="versionno" style="display:none">'+$('#Versionno').val()+'</div>'+
					'<div class="timeline-footer">'+
					'<a class="btn btn-primary btn-xs  GridViewBTN" data-popup-open="popup-1">Read More</a>&#160;&#160;<a class="btn btn-primary btn-xs  GridRowEditBTN" data-popup-open="popup-1">Edit</a>&#160;&#160;<a class="btn btn-primary btn-xs GridRowDeleteBTN" data-popup-open="popup-1">Delete</a>'+
					'<span class="crdate"><i>'+$('#Bsn_Date').val()+'</i></span></div></div></li>'
					);
		}
		
	}
			else
	{
				//$('#tmelne section').eq(rowindexval).find('li').eq(rowliindex).remove();
				$('#tmelne section').eq(secindx).find('li').eq(liindx).before(
				  
					 '<li class="CurrentUsr">'+
					 '<i class="roundsze bg-blue"></i><div class="timeline-item"><span class="time"><i class="fa fa-clock-o"></i></span>'+
					 '<h3 class="timeline-header">'+ $('#LoggedInUserFnmae').val()+'</h3>'+
					' <div class="timeline-body">'+ $('#Remarks').val()+'<br /></div>'+
					'<div class="versionno" style="display:none">'+$('#Versionno').val()+'</div>'+
					 '<div class="timeline-footer">'+
					 '<a class="btn btn-primary btn-xs  GridViewBTN" data-popup-open="popup-1">Read More</a>&#160;&#160;<a class="btn btn-primary btn-xs GridRowEditBTN" data-popup-open="popup-1">Edit</a>&#160;&#160;<a class="btn btn-primary btn-xs GridRowDeleteBTN" data-popup-open="popup-1">Delete</a>'+
					 '<span class="crdate"><i>'+$('#Bsn_Date').val()+'</i></span></div></div></li>'
					 );
	}
	
InstVal=$('#LoggedInUser').val()+'|'+$('#Created_Date').val()+'|'+$('#Bsn_Date').val()+'|'+$('#Remarks').val()+'|'+$('#Versionno').val();
InstnVal(InstVal,"Edit");
}
                // CLEAR ALL TEXTBOXES.
                $('.clearDM').find('input:text').each(

            function () {
                $('input:text[id=' + $(this).attr('id') + ']').val('');
            }

        );

                $('.clearDM').val('');
                var loggedinuser = getUrlParam("username");
                document.getElementById("LoggedInUser").value=loggedinuser;
				var loggedinuserfname = GetCurrentUserFName();
				document.getElementById("LoggedInUserFnmae").value=loggedinuserfname;
                var CreatedDate = get2dateTime();
                document.getElementById("Created_Date").value=CreatedDate;
                var bsndate=get2dateTime();
                document.getElementById("Bsn_Date").value=bsndate;

               // $('.cmntbox').dialog('close');  
                
               
        	        var targeted_popup_class = jQuery(this).attr('data-popup-closesbmt');
        	        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
        	 
        	        e.preventDefault();
					 $('.Timeline').show();
        	   

			   ajaxindicatorstop();
			   
});





$(document).on('click', '#GridBTNCn', function (e) { 
	 
	 var targeted_popup_class = jQuery(this).attr('data-popup-closeCnl');
     $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

     e.preventDefault();
	 
	 });


	 
	 
	 
$(document).on('click', '.GridRowEditBTN', function (e) {
	 $('.clearDM').val('');
	 $('#addhdr').hide();
	 $('#edithdr').show();
	 $('#viewhdr').hide();
	 $('#GridBTNSb').show();
	 $('#GridBTNCn').show();
	 
	$('#Remarks').prop('disabled', false);
	 btnvalue='Edit';
	 remval='';
	 mdtval='';
	//var tablest = "<table cellspacing=\"2\" cellpadding=\"2\" width=\"80%\">";
	 var name="";
	 var value="";
	 var GridPGURL="";
	 var rowchk="0";

		 
		secindx =$(this).closest('section').index();
		liindx =$(this).closest('li').index();

	     
		$('#LoggedInUser').prop('disabled', false);
		$('#LoggedInUserFnmae').prop('disabled', false);
		$('#Created_Date').prop('disabled', true);
	    $('#Bsn_Date').prop('disabled', true);
	    $('#Remarks').prop('disabled', false);
		$('#Versionno').prop('disabled', false);

		
		$("#Remarks").val($(this).closest('li').find(".timeline-body").text());
	    $('#LoggedInUser').val(getUrlParam("username"));
		$('#LoggedInUserFnmae').val($(this).closest('li').find('.timeline-header').text());
		$('#Created_Date').val($(this).closest('li').find('.crdate').text());
	    $('#Bsn_Date').val(get2dateTime());
		$('#Versionno').val($(this).closest('li').find('.versionno').text());
		 $('#Remarks').attr("readonly", false);

	    
	    
	   remval=$('#Remarks').val();
		 mdtval=$('#Bsn_Date').val();
	    
		

    
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
     
            e.preventDefault();


        return false;
	 });



$(document).on('click', '.GridRowDeleteBTN', function () {



var clsesttr=  $(this).closest('li');
$("#Remarks").val($(this).closest('li').find(".timeline-body").text());
$('#LoggedInUser').val($(this).closest('li').find('.timeline-header').text());
$('#Created_Date').val($(this).closest('li').find('.time').text());
$('#Bsn_Date').val(get2dateTime());
$('#Versionno').val($(this).closest('li').find('.versionno').text());	

alertify.confirm("Are you Sure to Delete?", function (e) {
	if (e) 
	{
 ajaxindicatorstart("Loading.. Please Wait");		
InstVal=$('#LoggedInUser').val()+'|'+$('#Created_Date').val()+'|'+$('#Bsn_Date').val()+'|'+$('#Remarks').val()+'|'+$('#Versionno').val();
InstnVal(InstVal,"Delete");
    clsesttr.remove();
 ajaxindicatorstop();
    }
	else
	{
		 ajaxindicatorstop();
    return false;
    }

     });
	  ajaxindicatorstop();
});





$(document).on('click', '.GridViewBTN', function (e) {
	
	clsebtn='View';
	 $('#addhdr').hide();
	 $('#edithdr').hide();
	 $('#viewhdr').show();
	$('#Remarks').attr('readonly','readonly');
	 remval='';
	 mdtval='';
	
	 var name="";
	 var value="";
	 var GridPGURL="";
	 var rowchk="0";

	 $('#GridBTNSb').hide();
	 $('#GridBTNCn').show();
	
 
	   secindx =$(this).closest('section').index();
	   liindx =$(this).closest('li').index();

		$("#Remarks").val($('#tmelne section').eq(secindx).find('li').eq(liindx).find(".timeline-body").text());
	    $('#LoggedInUser').val($('#tmelne section').eq(secindx).find('li').eq(liindx).find('.timeline-header').text());
		$('#Created_Date').val($('#tmelne section').eq(secindx).find('li').eq(liindx).find('.time').text());
	    $('#Bsn_Date').val($('#tmelne section').eq(secindx).find('li').eq(liindx).find('.time-label').text());
	

	    
	   remval=$('#Remarks').val();
		 mdtval=$('#Bsn_Date').val();
		 
		 var targeted_popup_class = jQuery(this).attr('data-popup-open');
         $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
  
         e.preventDefault();
	    return false;
		
	 


	 });


$('#Save').click(function () {


	    	
	    	
	    	//savecmnts();
	    	 var AddrXML = Gridsubmitdata_m();
	    	AssignGridXmltoField("cmnts", AddrXML);
	    	var x=$('#cmnts').val(AddrXML);
	    	 var prfx = getUrlParam("Prfx");
			 
			 
	    	$(window.parent.document.documentElement).find('#'+prfx+'Cmnts').val(x.val());
	    	$("form",parent.document).prepend("<img id=\"GridCnBTN\" type=\"hidden\" style=\"display:none;\" src=\"ThemeproLO/Common/Images/cross.png\">");

	    	  window.parent.document.getElementById("GridCnBTN").click();

	    		
	    	
	});
		
		
		
$('#Cancel').click(function () {

	
	    	
	    	$("form",parent.document).prepend("<img id=\"GridCnBTN\" type=\"hidden\" style=\"display:none;\"  src=\"ThemeproLO/Common/Images/cross.png\">");

	    	  window.parent.document.getElementById("GridCnBTN").click();
	    	
	    	
	    		
	    	
}); 




function fetcttimelinedata()
{
   	$('.Rpane').hide();		
	$('.Timeline').show();
	
		 var LegalDocXML =GridTimedata("TableCmnts");
		LegalDocXML= LegalDocXML.replace('<row></row>','')
		  var userid = GetCurrentUser();
	 
	var Prefx = getUrlParam("Prfx");
	var ProcesId = getUrlParam("processId");
	var ActivityId = getUrlParam("ActivityId");
		
	
	var livalue = UI_getdata(LegalDocXML,userid,ActivityId,'','','LSW_sTimeline');
		
	livalue = livalue.replace(/<Resultset><a><HTML>/g, "");	
	livalue = livalue.replace('</HTML></a></Resultset>',' '); 

	 $('#tmelne').append(livalue);
	    	
}
emptygridchk("TableCmnts");	

});
 
 
 
 
 
 
 function Gridsubmitdata_m() {
 	  
	   var sectioncount = $("#tmelne").find(".time-label").length;

	     var textval=''
		 
		 
		 for(j=0;j<sectioncount;j++)
		 {
		  var licount = $($("#tmelne").find('section')[j]).find(".timeline-body").length;
	         	for(i=0;i<licount;i++)
				{
				//var remarks=$($($("#tmelne").find('section')[j]).find(".timeline-body")[i]).text()
				//var user=$($($("#tmelne").find('section')[j]).find('.timeline-header')[i]).text()
				var ctdate=$($($("#tmelne").find('section')[j]).find('.time')[i]).text();
				var timestampval= timeDifference(ctdate);
				$($($("#tmelne").find('section')[j]).find('.time')[i]).text(timestampval);
				//var bsndate=$($("#tmelne").find('.time-label')[j]).text().trim()
	         	//textval += user+'|'+ctdate+'|'+bsndate+'|'+remarks+',';
				//textval +=user+'|'+ctdate+'|'+remarks+',';
	         	}
				
		}
      //textval = textval;
	  
    // return textval;
	
 		
 	
 }





 

function fetchcmnts(prcsid,frmid)
{
	//var prfx = getUrlParam("Prfx");
	//var y=$(window.parent.document.documentElement).find('#'+prfx+'Cmnts').val();
	//$('#cmnts').val(y);
	//if(y!='')
		//{
	//fetchgrid("TableCmnts", "ISGridDBfields");
	//OnloadgridAddr("cmnts", "TableCmnts");
		//}
		var ProcessId=prcsid;
		var FormId=frmid;
		var Activityid=getUrlParam("ActivityId");
		var user=getUrlParam("username");
		var livalue = UI_getdata(ProcessId,Activityid,FormId,user,"","SAM_sGettimelinePageCmnts");
		livalue = livalue.replace(/<Resultset><a><HTML>/g, "");	
		livalue = livalue.replace('</HTML></a></Resultset>',' '); 

	 $('#tmelne').append(livalue);
		
}

function fetchgrid(TableID,FieldsClassName)
{
	var user=GetCurrentUserFName();
	var x=$('#cmnts').val();
	var str_array = x.split(',');
	//var str_arryval=str_array.split('|');
	var rowcount=str_array.length;
	
	//var count=str_arryval.length;
 //var str_array1 = tableid.split(',');
	  var tablest='';
	for (j = 0; j < rowcount; j++) {
     tablest=tablest+'<tr class="trclass">';
    var x= str_array[j].split('|');
    var count=x.length;
    
    if(x[0]==user)
 	   {
    //count=count+1;
    tablest =tablest+'<td><img type="button" class="GridRowEditBTN" data-popup-open="popup-1" style="width:20px;height:20px;" src="ThemeproLO/Common/Images/Edit.png" title="Edit">&nbsp;&nbsp;<img type="button" class=" GridRowDeleteBTN" style="width:20px;height:20px;" src="ThemeproLO/Common/Images/file_delete.png" title="Delete">&nbsp;&nbsp;<img type="button" id="View" data-popup-open="popup-1" class="GridViewBTN" title="View" style="width:20px;height:20px;" src="ThemeproLO/Common/Images/review1.png"></td>'  
 	   }
    else
 	   {
 	   
 	   tablest=tablest+'<td><img type="button" id="View" data-popup-open="popup-1" class="GridViewBTN" title="View" style="width:20px;height:20px;" src="ThemeproLO/Common/Images/review1.png"></td>'
 	   
 	   }
    for (i = 0; i< count; i++) {
 	  if(i==count-1)
 		  {
 		  tablest =tablest+'<td style="font-family:calibri;display: block;text-overflow: ellipsis;word-wrap: break-word;overflow: hidden; max-height:4em;line-height:2em;">'+x[i]+'</td>';
 		  } 
 	  else{	   
      tablest =tablest+'<td style="font-family:calibri;">'+x[i]+'</td>';
 	  }

    }
         
    tablest= tablest+'</tr>' ;       
	}
	 tablest= tablest ;
	$('#TableCmnts tbody').append(tablest);
}

function GridTimedata(TableID) {
   
var name="";
var fieldid="";
var value="";


var formxml="<Data>";


$('#'+TableID).find('thead').find('tr:nth-child(1)').find('th').find('.DataTables_sort_wrapper').find("span").remove().end().html();

for(j=0;j<$("#"+TableID).find('tbody').find('tr').length;j++)
{
formxml= formxml + "<row>";

var rowwise = $("#"+TableID).find('tbody').find('tr')[j];

for(i=1;i<$("#"+TableID).find('thead').find('tr:nth-child(1)').find('th').length;i++)
 {
    name = $("#"+TableID).find('thead').find('tr:nth-child(1)').find('th')[i].innerHTML.replace(/ /g, '');
   value = $(rowwise).find('td:eq('+i+')').text().replace(/,/g, "");
   
   if(value != "")
   {
var formxml=formxml+"<"+name+">"+ value  +"</"+name+">";
   }
}
formxml= formxml + "</row>";
}
var formxml = formxml + "</Data>";
//alert(formxml);
return formxml;

}






function InstnVal(InsVal,flg)
{
var ProcessId=getUrlParam("processId");
var FormId=getUrlParam("formid");
var Activityid=getUrlParam("ActivityId");

var livalue = UI_getdata(ProcessId,Activityid,FormId,InsVal,flg,'SAM_sInstimelinePageCmnts');

}




function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 1) { // 1 minutes
        window.location.reload();
    }
}