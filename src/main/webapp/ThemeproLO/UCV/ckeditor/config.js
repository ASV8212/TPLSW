/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	//config.language = 'es';
	//config.uiColor = '#F7B42C';
	//config.toolbarCanCollapse = true;
	//alert("hi");
	//var Browser = "Chrome";
	var user = detect.parse(navigator.userAgent);
	config.height = 300;
	
	//alert(user.browser.family);
	if(user.browser.family ==="Chrome")
	{
	//config.extraPlugins = 'pastebase64,save,timestamp,maxlength';
	config.extraPlugins = 'save,timestamp,maxlength';
	//CKEDITOR.config.removePlugins = 'About,ShowBlocks';
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];
	config.removeButtons = 'Source,PasteText,PasteFromWord,Templates,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Scayt,Image,Flash,Iframe,ShowBlocks,About,NewPage,CreateDiv,Language,Timestamp';

	//config.removePlugins = 'elementspath,save,image,flash,iframe,link,smiley,tabletools,find,pagebreak,templates,about,maximize,showblocks,newpage,language';
	}
	
	config.removeButtons = 'Source,PasteText,PasteFromWord,Templates,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Scayt,Image,Flash,Iframe,ShowBlocks,About,NewPage,CreateDiv,Language,Timestamp';
	

	
	//config.removePlugins = 'Source';
	//config.removePlugins = 'elementspath,image,flash,iframe,pagebreak,templates,about,showblocks,newpage,language,timestamp,Source';
	//config.extraPlugins = 'timestamp';
};


	

function getInternetExplorerVersion() {
   var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        var rv = -1;

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
        {               

            if (isNaN(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))))) {
                //For IE 11 >
                if (navigator.appName == 'Netscape') {
                    var ua = navigator.userAgent;
                    var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                    if (re.exec(ua) != null) {
                        rv = parseFloat(RegExp.$1);
                        alert(rv);
                    }
                }
                else {
                    alert('otherbrowser');
                }
            }
            else {
                //For < IE11
                alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
            }
            return "IE";
        }
		else
		{
			 return "Not IE";
		}
		
		
		}