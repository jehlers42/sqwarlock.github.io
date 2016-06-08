$(document).ready(function() {
	if (typeof window.orientation !== "undefined") {
			$(".mainContainer").css('width', '99%');
			$(".centerFooter").css('width', '99%');
		}
		else {
			$(".mainContainer").css('width', '60%');
			$(".centerFooter").css('width', '60%');
		}
});
