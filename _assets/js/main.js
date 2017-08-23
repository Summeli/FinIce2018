
jQuery( document ).ready( function( $ ) {

	$( 'a', $( '#navi' ) ).on( 'click', function() {

		var $trg = $( $( this ).data( 'target' ) );

		if( $trg.length > 0 ) {
			
			var offset = 0;
			
			if( $( document ).height() - $trg.offset().top < $( window ).height() ) {

				offset = $( window ).height() - ( $( document ).height() - $trg.offset().top );

			}

			$trg
				.velocity( 'scroll', { duration: 1000, easing: 'easeOutSine', offset: -offset });

			if( $( window ).width() <= 775 ) {

				$( '#burger-menu.open' )
					.trigger( 'click' );

			}

		}

	});


	$( '#mapframe-overlay' ).on( 'click', function() {
		
		$( '#mapframe' )
			.removeClass( 'overlay' );

		$( '#mapframe-overlay' )
			.velocity({ opacity: [ 0, 1 ] }, { duration: 750, display: 'none', easing: 'easeOutSine' });
		
	});


	$( 'a', $( '#mapframe-overlay' ) ).on( 'click', function( e ) {
		
		e.preventDefault();
	
	});
	
	
	$( '#head' ).waypoint({

		handler: function( dir ) {
			
			var $elm = $( '#navi' );

			if( dir == 'down' ) {

				$elm
					.addClass( 'prefixed' );

			}
			
			if( dir == 'up' ) {

				$elm
					.removeClass( 'prefixed transition' );

			}

		},
		offset: -200

	});


	$( '#sect-info' ).waypoint({

		handler: function( dir ) {
			
			var $elm = $( '#navi' );

			if( dir == 'down' ) {

				$elm
					.addClass( 'fixed transition' );

			}
			
			if( dir == 'up' ) {

				$elm
					.removeClass( 'fixed' );

			}

		},
		offset: '15%'

	});


	$( '#sect-liput' ).waypoint({

		handler: function( dir ) {
			
			var $elm = $( this.element );

			if( dir == 'down' && $elm.hasClass( 'firstview' ) ) {

				$elm
					.removeClass( 'firstview' );

			}

		},
		offset: '20%'

	});


	var $tickettexts = $( '.ticket-text', $( '#main' ) ), 
	highest = Math.max.apply( null, $tickettexts.map( function() { return $( this ).height(); }).get() );

	if( $( window ).width() > 667 ) {

		$tickettexts
			.css( 'min-height', highest );

	}


	$( '#burger-menu' ).on( 'click', function() {
		
		$navi = $( '#navi' );
		
		if( $navi.hasClass( 'open' ) ) {

			$navi
				.removeClass( 'open' )
				.velocity({ opacity: [ 0, 1 ] }, { duration: 350, easing: 'easeOutCirc', complete: function() {
				
					$( this )
						.removeAttr( 'style' );
				
				}});

			$( this )
				.removeClass( 'open' );

		}
		else {

			$navi
				.addClass( 'open' )
				.velocity({ opacity: [ 1, 0 ] }, { duration: 350, easing: 'easeOutCirc', display: 'block' });
			
			$( this )
				.addClass( 'open' );

		}

	});

});


jQuery( window ).on( 'load', function() {
	
	var $ = jQuery;

	$( 'body' )
		.removeClass( 'preload' );

	if( !Modernizr.touch ) {

		var s = skrollr.init({ smoothScrolling: false, forceHeight: false });

	}

});