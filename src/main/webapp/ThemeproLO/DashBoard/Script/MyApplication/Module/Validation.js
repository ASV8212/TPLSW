

function getModule(Event)
{
	var Loguser=$("#LogUsr").val()
		var xml=UI_getdata(Loguser,Event.id,"","","","LSW_SCHKVERTICALUSER")
		var VERTICAL=$(xml).find('RESULT').text() 
	if(VERTICAL!="Y")
	{
		alert (VERTICAL)
		return 
	}
	
	var IOP1 = window.location.origin;
	var RedirectURL = IOP1+"/TPLSW/MyApplication?VERTICAL="+Event.id;
	$(location).attr('href',RedirectURL);

}