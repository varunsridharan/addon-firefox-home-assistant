$( document ).ready( () => {
	const formElm = $( 'form' );
	browser.storage.sync.get( [ 'home_assistant_url', 'home_assistant_popup_height', 'home_assistant_popup_width', 'home_assistant_popup_scale' ] )
		   .then( ( result ) => {
			   let url = result.home_assistant_url;
			   $( 'input#dashboardurl' ).val( url );
			   $( 'input#popup_height' ).val( result.home_assistant_popup_height );
			   $( 'input#popup_width' ).val( result.home_assistant_popup_width );
			   $( 'input#popup_scale' ).val( result.home_assistant_popup_scale );
		   } );
	formElm.on( 'submit', () => {
		browser.storage.sync.set( {
			'home_assistant_url': $( 'input#dashboardurl' ).val(),
			'home_assistant_popup_height': $( 'input#popup_height' ).val(),
			'home_assistant_popup_width': $( 'input#popup_width' ).val(),
			'home_assistant_popup_scale': $( 'input#popup_scale' ).val(),
		} );
		return false;
	} );
} );



