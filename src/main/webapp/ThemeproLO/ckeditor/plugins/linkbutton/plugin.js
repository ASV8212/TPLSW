/**
 * 
 */
(function(){
//Section 1 : Code to execute when the toolbar button is pressed
var a= {
exec:function(editor){
  var theSelectedText = editor.getSelection().getNative();
  CallCfWindow(theSelectedText);
}
},
//Section 2 : Create the button and add the functionality to it
b=?linkbutton?;
CKEDITOR.plugins.add(b,{
init:function(editor){
editor.addCommand(b,a);
editor.ui.addButton(?linkbutton?,{
label:?Link Button?,
icon: this.path + ?logo_ckeditor.png?,
command:b
});
}
});
})();