browser.storage.sync.get( [ 'home_assistant_url', 'home_assistant_popup_height', 'home_assistant_popup_width','home_assistant_popup_scale' ] )
	   .then( ( result ) => {
		   let scale   = parseFloat(result.home_assistant_popup_scale) || 0.80;
		   let width   = parseInt(result.home_assistant_popup_width) || 420;
		   let height  = parseInt(result.home_assistant_popup_height) || 900;
		   let wrapper = document.getElementById( 'spaceWrap' );
		   let iframe  = document.getElementById( 'home-assistant-frame' );

		   if( 1 == scale ) {
			   wrapper.style.setProperty( 'width', width + 'px' );
			   wrapper.style.setProperty( 'height', height + 'px' );
		   } else {
			   wrapper.style.setProperty( 'width', ( width * scale ) + 'px' );
			   wrapper.style.setProperty( 'height', ( height * scale ) + 'px' );
		   }

		   iframe.style.setProperty( 'width', width + 'px' );
		   iframe.style.setProperty( 'height', height + 'px' );
		   iframe.style.setProperty( '-webkit-transform', 'scale(' + scale + ')' );
		   iframe.style.setProperty( '-ms-transform', 'scale(' + scale + ')' );
		   iframe.style.setProperty( 'transform', 'scale(' + scale + ')' );

		   document.getElementById( 'home-assistant-frame' ).setAttribute( 'src', result.home_assistant_url );
	   } );