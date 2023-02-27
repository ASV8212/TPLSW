(function () {
    'use strict';

    CKEDITOR.plugins.add('pastebase64', {
        init: init
    });

    function init(editor) {
        if (editor.addFeature) {
            editor.addFeature({
                allowedContent: 'img[alt,id,!src]{width,height};'
            });
        }

        editor.on("contentDom", function () {
            var editableElement = editor.editable ? editor.editable() : editor.document;
            editableElement.on("paste", onPaste, null, {editor: editor});
        });

editor.on( 'paste', function( evt ) {
   // if ( !checkImage( evt.data.dataValue ) )
	if(evt.data.dataValue != "")
	{		
   //alert(evt.data.dataValue);
   //evt.cancel();
   var parser = new DOMParser()
   var doc = parser.parseFromString(evt.data.dataValue, "text/html");
  
   
   for(var i=0;i<=$(doc).find("img").length; i++){
	   var  imgURL= $(doc).find("img").eq(i).attr("src");
	   //alert(imgURL);
	 //var x=  toDataURL(imgURL);
	   try {
		    
		
	 toDataUrl(imgURL, function(myBase64) {
		    console.log(myBase64); // myBase64 is the base64 string
		});
	   }
		catch(err) {
		   Alert(err.message);
		}
   }
	}
     //   evt.cancel();
} );
    }

	
	
    function onPaste(event) {
        var editor = event.listenerData && event.listenerData.editor;
        var $event = event.data.$;
        var clipboardData = $event.clipboardData;
        var found = false;
        var imageType = /^image/;

        if (!clipboardData) {
            return;
        }

        return Array.prototype.forEach.call(clipboardData.types, function (type, i) {
		//	setTimeout(function() {alert('Pasted');}, 0);
            if (found) {
                return;
            }

            if (type.match(imageType) || clipboardData.items[i].type.match(imageType)) {
                readImageAsBase64(clipboardData.items[i], editor);
                return found = true;
            }
			//setTimeout(function() {alert('Pasted');}, 0);
        });
		
		
    }

    function readImageAsBase64(item, editor) {
        if (!item || typeof item.getAsFile !== 'function') {
            return;
        }

        var file = item.getAsFile();
        var reader = new FileReader();

        reader.onload = function (evt) {
            var element = editor.document.createElement('img', {
                attributes: {
                    src: evt.target.result
                }
            });

            // We use a timeout callback to prevent a bug where insertElement inserts at first caret
            // position
            setTimeout(function () {
                editor.insertElement(element);
            }, 10);
        };

        reader.readAsDataURL(file);
    }
})();
function toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}
	
	function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

