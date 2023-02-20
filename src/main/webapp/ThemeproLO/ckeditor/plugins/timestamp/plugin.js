CKEDITOR.plugins.add( 'timestamp', {
    icons: 'timestamp',
    init: function( editor ) {
        //Plugin logic goes here.
    //	toolbar: 'insert,0';
editor.addCommand( 'insertTimestamp', {
    exec: function( editor ) {
        var now = new Date();
        
       editor.insertHtml( 'The current date and time is: <em>' + now.toString() + '</em>' );
    }

});
editor.ui.addButton( 'Timestamp', {
    label: 'Insert Timestamp',
    command: 'insertTimestamp',
    toolbar: 'insert'
});
    }

});