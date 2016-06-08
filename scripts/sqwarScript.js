$(document).ready(function() {
	if (typeof window.orientation !== "undefined") {
			$(".mainContainer").css('width', '99%');
			$(".centerFooter").css('width', '99%');
		}
		else {
			$(".mainContainer").css('width', '60%');
			$(".centerFooter").css('width', '60%');
		}
	var cachedWidth = $(window).width();
	$(window).resize(function() {
		var newWidth = $(window).width();
		if (newWidth != cachedWidth)) {
			$(".mainContainer").css('width', '99%');
			$(".centerFooter").css('width', '99%');
			cachedWidth = newWidth;
		}
		else {
			$(".mainContainer").css('width', '60%');
			$(".centerFooter").css('width', '60%');
		}
	});
});
