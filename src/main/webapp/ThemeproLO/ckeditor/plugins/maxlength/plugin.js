/*
* CKEditor Maxlength Plugin
*
* Adds a character count to the path toolbar of a CKEditor instance
*
* @package maxlength
* @author Sage McEnery
* @version 1
* @copyright divgo 2012
* based on Word Count plugin from : http://www.n7studios.co.uk/2010/03/01/ckeditor-word-count-plugin/
*/
(function () {
	CKEDITOR.plugins.maxlength = {
	};

	var plugin = CKEDITOR.plugins.maxlength;

	function doCharacterCount(evt) {
		var editor = evt.editor;
		if ($('span#cke_maxlength_' + editor.name).length > 0) { // Check element exists
			 
			setTimeout(function () {
			var Worddata=	$("#"+editor.name).val();
			//var charCount = $(Worddata).text().length
			var charCount = $(editor.getData()).text().length;//editor.getData().length;
				var wcTarget = $('span#cke_maxlength_' + editor.name);
				if (editor.config.max_length > 0) {
					wcTarget.html("Character " + charCount + "/" + editor.config.max_length);
				} else {
					wcTarget.html("Character: " + charCount);
				};

				if (charCount > editor.config.max_length) {
					wcTarget.css('color', 'red');
					editor.execCommand('undo');
				} else if (charCount == editor.config.max_length) {
					editor.fire('saveSnapshot');
					evt.cancel();
					wcTarget.css('color', 'red');
				} else {
					wcTarget.css('color', 'black');
				};
			}, 100);
		}
	}

	/**
	* Adds the plugin to CKEditor
	*/
	CKEDITOR.plugins.add('maxlength', {
		init: function (editor) {
			if ($("#" + editor.name).attr("maxlength")) {
				editor.config.max_length = $("#" + editor.name).attr("maxlength");
			} else if ($("#" + editor.name).attr("data-maxlen")) {
				editor.config.max_length = $("#" + editor.name).attr("data-maxlen");
			} else {
				editor.config.max_length = 0;
			};

			setTimeout(function () {
				var Worddata=	$("#"+editor.name).val();
				var charCount = $(Worddata).text().length
				if (editor.config.max_length > 0) {
					$("#cke_"+editor.name).find(".cke_bottom").append("<span id='cke_maxlength_" + editor.name + "'>Character: " + charCount + '/' + editor.config.max_length + "</span>");
					//$(".cke_bottom").append("<span id='cke_maxlength_" + editor.name + "'>Character: " + editor.getData().length + '/' + editor.config.max_length + "</span>");
				} else {
					$("#cke_"+editor.name).find(".cke_bottom").append("<span id='cke_maxlength_" + editor.name + "'>Character: " + charCount + '/' + editor.config.max_length + "</span>");
				}
			}, 1000);

			editor.on('key', doCharacterCount);
		}
	});
})();

// Plugin options
CKEDITOR.config.max_length = 0; 