// js for HFSecure/root

$(document).ready(function() {

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

//	setTimeout(function() {
//		$('header h1 span').each(function(addDelay) {
//			$(this).delay(650 * addDelay).animate({
//				'opacity': 1
//			}, 500 );
//		});
//	}, 200 );

	// Header onLoad animation.
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
	
	
	
	
	// nav controls
	$('#nav-button').click(function() {
		$('nav').fadeToggle(400);
	})

	$('.legal').click(function() {
		$('.wrapper-legal').toggle();
	})
	
});



































