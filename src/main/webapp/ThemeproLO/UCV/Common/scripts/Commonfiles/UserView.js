function frameandqueue(a,b){var c=document.getElementById("fname").value;if("pending"==b){var d="http://192.168.168.47/karomi/custom/Joget_Test/Queues/jogetpendingqueue.aspx?cususr="+c;document.getElementById(a).src=d}if("initiated"==b){var d="http://192.168.168.47/karomi/custom/Joget_Test/Queues/jogetinitiatedqueue.aspx?cususr="+c;document.getElementById(a).src=d}}$(document).ready(function(){if("HTMLPageStatus"==window.location.pathname.toString().split("//")[1]){var c="sam_sprocesspending_LOR",d="sam_sprocessInitiated_LOR",e="#currentUser.firstName#",f="spname="+c+"&user="+e+"&spname2="+d;$.ajax({type:"GET",url:"http://192.168.168.47/karomi/custom/Joget_Test/Queues/queuecount.aspx",data:f,dataType:"xml",success:function(a){var b=$(a).find("Check").text(),c=$(a).find("val2").text();""==b&&(b="0"),""==c&&(c="0"),document.getElementById("df1").innerHTML="Pending Queue ("+b+")",document.getElementById("df2").innerHTML="User Initiated Q ("+c+")"}})}""==getUrlParam("activityId")&&(document.getElementById("CE5444DC438E4A878C024D6DACE274EA").style.display="none")});