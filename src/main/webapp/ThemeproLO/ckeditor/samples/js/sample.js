/**
 * Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/* exported initSample */

if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
	CKEDITOR.tools.enableHtml5Elements( document );

// The trick to keep the editor in the sample quite small
// unless user specified own height.
CKEDITOR.config.height = 150;
CKEDITOR.config.width = 'auto';

var initSample = ( function(editor) {
	var wysiwygareaAvailable = isWysiwygareaAvailable(),
		isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' );

	return function(editor) {
		var editorElement = CKEDITOR.document.getById( editor );

		// :(((
		if ( isBBCodeBuiltIn ) {
			editorElement.setHtml(
				'Hello world!\n\n' +
				'I\'m an instance of [url=http://ckeditor.com]CKEditor[/url].'
			);
		}

		// Depending on the wysiwygare plugin availability initialize classic or inline editor.
		if ( wysiwygareaAvailable ) {
		
			CKEDITOR.replace( editor );
			//CKEDITOR.instances.editor.commands.save.startDisabled='false'
			//CKEDITOR.instances.editor.commands('save').enable()
		} else {
			editorElement.setAttribute( 'contenteditable', 'true' );
			CKEDITOR.inline( editor );
			//CKEDITOR.instances.editor.commands.save.startDisabled='false'
			//CKEDITOR.instances.editor.commands('save').enable()

			// TODO we can consider displaying some info box that
			// without wysiwygarea the classic editor may not work.
		}
		//CKEDITOR.instances.editor.commands.save.startDisabled='false'
	};

	function isWysiwygareaAvailable() {
		// If in development mode, then the wysiwygarea must be available.
		// Split REV into two strings so builder does not replace it :D.
		if ( CKEDITOR.revision == ( '%RE' + 'V%' ) ) {
			return true;
		}
		 $('.cke_button__save').removeClass('cke_button_disabled');
		return !!CKEDITOR.plugins.get( 'wysiwygarea' );
	}
	
	CKEDITOR.instances.editor.commands.save.startDisabled='false'
} )();

var initSample2 = ( function() {
	var wysiwygareaAvailable = isWysiwygareaAvailable(),
		isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' );

	return function() {
		var editorElement = CKEDITOR.document.getById( 'editor' );

		// :(((
		if ( isBBCodeBuiltIn ) {
			editorElement.setHtml(
				'Hello world!\n\n' +
				'I\'m an instance of [url=http://ckeditor.com]CKEditor[/url].'
			);
		}

		// Depending on the wysiwygare plugin availability initialize classic or inline editor.
		if ( wysiwygareaAvailable ) {
			CKEDITOR.replace( 'editor' );
		} else {
			editorElement.setAttribute( 'contenteditable', 'true' );
			CKEDITOR.inline( 'editor' );

			// TODO we can consider displaying some info box that
			// without wysiwygarea the classic editor may not work.
		}
	};

	function isWysiwygareaAvailable() {
		// If in development mode, then the wysiwygarea must be available.
		// Split REV into two strings so builder does not replace it :D.
		if ( CKEDITOR.revision == ( '%RE' + 'V%' ) ) {
			return true;
		}

		return !!CKEDITOR.plugins.get( 'wysiwygarea' );
	}
} )();
function FCKeditor_OnComplete( editor ) 
{ 
/**var oCommand = editorInstance.Commands.GetCommand('save') ;
oCommand.Execute = function(){return false;} ;
oCommand.GetState = function(){return FCK_TRISTATE_ENABLED;} ;**/
	//CKEDITOR.instances.editor.commands.save.startDisabled='false'

	 $('.cke_button__save').removeClass('cke_button_disabled');
} 

function FCKeditor_Save(editor){
var param1=editor.getData();//CKEDITOR.instances.BCDT_HdnCusDetl.getData();
		
		var Prcsid=$("#processId").val()//"46950_MCRFN_MicroFn";//
		spname='Sam_sInsRichTxtEdt';
		var FldName =editor.name;//'BCDT_HdnCusDetl';
		var OP="";
		var activityId=getUrlParam("ActvID");
		$.ajax({

	          url: "/TPLSW/UI_GetMainTxtData",///SampleProject/UI_GetMainTxtData  /ckeditor22/UI_GetMainTxtData
	          data: { param1: param1
	        
	        	  , param2: Prcsid
	        	  , param3: activityId
	        	  ,param4:FldName
				  ,param5:''
	        	  ,spname: spname
                  ,Prvnt:$(window.parent.parent.document).find("#Prvnt").val()				  },
	          async: false,
	          //dataType: "json",
			    dataType: "text",
	          type: 'POST',
	          complete: function OnSuccess_submit(xml1) {
	       	   
	       	 
	     	OP=xml1.responseText;
			toastr.success(OP);
			//alert(OP);
					//ajaxindicatorstop();
	       },
			
	       error: function (xml1)
	       {
				
				OP="Fail";
				   toastr.error('Document Submission Failed');
				//alert(OP);
				
	       }
	                             
	          
		   });
}

