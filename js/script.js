// js for HFSecure/root

$(document).ready(function() {

	window.introTimer = true;

	// always keep logo centered on tablet, laptop, desktop
	$('.border').css('left', ( ( $(window).width() / 2 ) - 210 ) );

	$('nav').hide();
	console.log('nav hidden.');
	
	// begin on load animations.
	$('header h1').css('opacity', 0);
	$('header p').hide();
	$('header img').css('opacity', 0);
	$('header img').css('height', 300);
	$('.border').hide();
	
	$('.wrapper-legal').hide();

	$('.quote-request').hide();

//	setTimeout(function() {
//		$('header h1 span').each(function(addDelay) {
//			$(this).delay(650 * addDelay).animate({
//				'opacity': 1
//			}, 500 );
//		});
//	}, 200 );

	// Header onLoad animation.
	/*
	setTimeout(function() {
		$('header img').animate({
			'opacity': 1,
			'height': 330
		}, 600);
	}, 200 );
	setTimeout(function() {
		$('header h1').animate({
			'opacity': 1,
			'font-size': '36px'
		},600)
	}, 600);
	setTimeout(function() {
		$('.border').fadeIn(400, function() {
			$('header p').fadeIn(400);
		});
	}, 1200);
	*/


	//###########   Quote Request Related   ###########

	$('#quo-req-cor, #quo-req-con, #quo-req-ins').click(function() {
		$('html, body').animate({
			scrollTop: '2100px'
		}, 600);

		setTimeout(function() {
			$('.quote-request').slideDown(600);
		}, 300)
	});



	



	//###########   NAV Related   ###########

	$(window).on('keyup', function(e) {
		if (e.which == 77) {
			if ( $('input, textarea').is(':focus') ) {
				// do nothing
			} else {
				window.introTimer = false;
				$('nav').fadeToggle(400);
			}
		}
	});

	// nav controls
	$('#nav-button').click(function() {
		window.introTimer = false;
		$('nav').fadeToggle(400);
	});

	$('.legal').click(function() {
		$('.wrapper-legal').toggle();
	});

	// contact (index.html) scroll to. 
	$('.nav-contact').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: '3100px'
		},1200);
		setTimeout(function() {
			$('.form-name').select();
		},1500);
	});
	
});



































