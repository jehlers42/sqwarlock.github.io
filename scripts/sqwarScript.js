$(document).ready(function() {
	$(window).resize(function() {
		if ($(window).width() < 960) {
			$(".mainContainer").css('width', '99%');
			$(".centerFooter").css('width', '99%');
		}
		else {
			$(".mainContainer").css('width', '60%');
			$(".centerFooter").css('width', '60%');
		}
	});
	if (typeof window.orientation !== "undefined" || $(window).width() < 960) {
			$(".mainContainer").css('width', '99%');
			$(".centerFooter").css('width', '99%');
		}
		else {
			$(".mainContainer").css('width', '60%');
			$(".centerFooter").css('width', '60%');
		}
});
