$(document).ready(function() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			$(".mainContainer").css('width', '99%');
			$(".centerFooter").css('width', '99%');
		}
		else {
			$(".mainContainer").css('width', '60%');
			$(".centerFooter").css('width', '60%');
		}
});
