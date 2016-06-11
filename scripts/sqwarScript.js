$(document).ready(function() {
	//Code for mobile rendering. Includes fancy resize script//
	if (typeof window.orientation !== "undefined") {
		$('.mainContainer').addClass("mobileContainer").removeClass("mainContainer");
		$('.siteFooter').addClass("mobileFooter").removeClass("siteFooter");
	} else {
		$(window).resize(function() {
			if ($(window).width() < 960) {
				$('.mainContainer').css('width', '99%');
				$('.siteFooter').css('width', '99%');
			} else {
				$('.mainContainer').css('width', '60%');
				$('.siteFooter').css('width', '60%');
			}
		});
	}
	//Start Art & Design hidden//
	$('.centerContentArt').hide();
	$('.centerContentDesign').hide();
	//Load Home Page//
	$('#home').click(function() {
		$('.centerContentArt').fadeOut('400');
		$('.centerContentDesign').fadeOut('400');
		$('.centerContentHome').delay('400').fadeIn('400');
	});
	$('#home').hover(function() {
		$(this).css('color', '#cc0066');
	}, function() {
		$(this).css('color', '#080808');
	});
	//Load Art Page//
	$('#art').click(function() {
		$('.centerContentHome').fadeOut('400');
		$('.centerContentDesign').fadeOut('400');
		$('.centerContentArt').delay('400').fadeIn('fast');
	});
	$('#art').hover(function() {
		$(this).css('color', '#cc0066');
	}, function() {
		$(this).css('color', '#080808');
	});
	//Load Game Design Page//
	$('#design').click(function() {
		$('.centerContentHome').fadeOut('400');
		$('.centerContentArt').fadeOut('400');
		$('.centerContentDesign').delay('400').fadeIn('fast');
	});
	$('#design').hover(function() {
		$(this).css('color', '#cc0066');
	}, function() {
		$(this).css('color', '#080808');
	});
});