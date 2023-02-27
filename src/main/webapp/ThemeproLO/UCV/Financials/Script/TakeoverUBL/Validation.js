
function HandlePropDtl()
{
	var xmlSTATUS=UI_getdata($("#PrcsID").val(),"","","","","LSW_SGETLOANDETAILS")
	$("#OUBL_PROINTRT").val($(xmlSTATUS).find('INTERESTRATE').text())
	$("#OUBL_PROTENURE").val($(xmlSTATUS).find('TENTURE').text())
	
	
}
function Checkinst(){
	var check=UI_getdata($("#PrcsID").val(),$("#OUBL_SCHEMEID").val(),"","","","LSW_SGETLOANDETAILS");
	$("#OUBL_PROINTRT").val($(check).find ('INTERESTRATE').text());
	$("#OUBL_PROTENURE").val($(check).find ('TENTURE').text());
}
function GetBusiness(){
	var xml=UI_getdata("TAKEOVERBUSI","","","","","LSW_SGETFINANCIALVAL");
    $("#OUBL_TYPOBUSS").html("");
	$("#OUBL_TYPOBUSS").append($(xml).find("RESULT").html());
	$("#OUBL_TYPOBUSS").material_select(); 
	
}
 function Profit()  
{
var Tybus=$("#OUBL_TYPOBUSS").val();
var result=UI_getdata("TAKEOVERVALUE",Tybus,"","","","LSW_SGETFINANCIALVAL");
$("#OUBL_PROFIT").val($(result).find("RESULT").text());
 $("#OUBL_PROFIT").next().addClass('active'); 
}

$(document).on("blur", ".Calculate", function() {

var year=$("#OUBL_YEARSALES").val().replace(/,/g,'');
var pro=$("#OUBL_PROFIT").val().replace(/,/g,'');
if(pro=='')
{
	pro=0;
}
if(year=='')
{
	year=0;
}
var yrpro=parseFloat(year)*parseFloat(pro)/100;
yrpro=CURINRCommaSep(parseFloat(yrpro).toFixed(0));
$("#OUBL_YEARPROFIT").val(yrpro);
$("#OUBL_YEARPROFIT").next().addClass('active');

})

$(document).on("blur", ".Division", function() {
	var mul=$("#OUBL_YEARPROFIT").val().replace(/,/g,'');
	var foir=60;
	var abc=parseFloat(mul)/12;
	abc=CURINRCommaSep(parseFloat(abc).toFixed(0));
	$("#OUBL_MONTHPROFIT").val(abc);
	$("#OUBL_FOIR").val(foir);
	$("#OUBL_FOIR").next().addClass('active');
	$("#OUBL_MONTHPROFIT").next().addClass('active');
})

$(document).on("blur", ".Instant", function() {

var test=$("#OUBL_MONTHPROFIT").val().replace(/,/g,'');
var law=$("#OUBL_FOIR").val();
if(test=='')
{
	test=0;
}
if(law=='')
{
	law=0;
}
var mas=parseFloat(test)*parseFloat(law)/100;
mas=CURINRCommaSep(parseFloat(mas).toFixed(0));
$("#OUBL_PROAVAEMI").val(mas);
$("#OUBL_PROAVAEMI").next().addClass('active');
})

$(document).on("blur", ".Medium", function() {

var line=$("#OUBL_PROAVAEMI").val().replace(/,/g,'');
var leng=$("#OUBL_EXISTEMI").val().replace(/,/g,'');
if(line=='')
{
	line=0;
}
if(leng=='')
{
	leng=0;
}
var win=parseFloat(line)-parseFloat(leng);
win=CURINRCommaSep(parseFloat(win).toFixed(0));
$("#OUBL_PROEXISTEMI").val(win);
 $("#OUBL_PROEXISTEMI").next().addClass('active');
 
 //EMI PER LAKH
 
/* 	var LonAt=100000;
	var ROI=0;
	var Tenur=0;
	//LnAt= $("#DMY3").val().split('|')[3];
	ROI=$("#OUBL_PROINTRT").val();
	Tenur=$("#OUBL_PROTENURE").val();
	if(LonAt=='')
	{
		LonAt=0;
	}
	if(isNaN(LonAt))
	{
		LonAt=0;
	}
	if(ROI=='')
	{
		ROI=0;
	}
	if(isNaN(ROI))
	{
		ROI=0;
	}
	if(Tenur=='')
	{
		Tenur=0;
	}
	if(isNaN(Tenur))
	{
		Tenur=0;
	}
	var amt=0;
	amt=parseFloat(LonAt *((ROI/100)/12) * (Math.pow(1+((ROI/100)/12),Tenur)/((Math.pow(1+((ROI/100)/12),Tenur))-1)));
	$("#OUBL_EMILAKH").val(CURINRCommaSep(parseFloat(amt).toFixed(0)));

	$("#OUBL_EMILAKH").next().addClass('active'); */ 
	
	var LnAmt=100000;
	 var ROI=0;
	 var Tenur=0; 
	 
	ROI=$("#OUBL_PROINTRT").val();
	Tenur=$("#OUBL_PROTENURE").val();
	 var result=UI_getdata(ROI,Tenur,LnAmt,$("#PrcsID").val()+'|'+$(".FormPageMultiTab li.active").attr("id"),"","LSW_SGETEMI_DATA");
	 var EMI=$(result).find("EMI").text();
	 	if(EMI=='')
	{
		EMI=0;
	}
	if(isNaN(EMI))
		{
			EMI=0;
		}
	$("#OUBL_EMILAKH").val(CURINRCommaSep(parseFloat(EMI).toFixed(2)));
	$("#OUBL_EMILAKH").next().addClass('active'); 
	
	//ELIGIBILITY
	
$(document).on("blur", ".ELIGI", function() {
	var j13=$("#OUBL_PROEXISTEMI").val().replace(/,/g,'');
	var j14=$("#OUBL_EMILAKH").val().replace(/,/g,'');
	var j16=$("#OUBL_LOAMORDISB").val().replace(/,/g,'');
	var j13Dj14=parseFloat(j13)/parseFloat(j14)*100000;
	var j16M=1.5*parseFloat(j16);
	var minj13j16=Math.min((j13Dj14),(j16M));
	if(minj13j16>=100000)
	{
		var result=minj13j16;
	}
	else
	{
		var result=0;
	}
	var end=Math.min((result),(500000));

	$("#OUBL_MAXLOAELY").val(CURINRCommaSep(parseFloat(end).toFixed(0)));
	$("#OUBL_MAXLOAELY").next().addClass('active'); 
})
 

})


	
	
	
		