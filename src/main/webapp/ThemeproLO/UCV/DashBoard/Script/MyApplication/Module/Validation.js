

function getModule(Event)
{
	var IOP1 = window.location.origin;
	var RedirectURL = IOP1+"/TPLSW/MyApplication?VERTICAL="+Event.id;
	$(location).attr('href',RedirectURL);

}