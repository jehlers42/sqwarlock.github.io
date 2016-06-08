$(document).ready(function() {
	$(window).resize(function() {
		if ($(window).width() < 960) {
			$(".mainContainer").css('width', '100%');
		}
		else {
			$(".mainContainer").css('width', '60%');
		}
	});
});
