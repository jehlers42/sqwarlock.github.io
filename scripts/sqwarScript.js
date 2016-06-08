$(document).ready(function() {
	if (typeof window.orientation !== "undefined") {
		$('#forMobile').addClass("mobileContainer").removeClass("mainContainer");
		$('.centerFooter').addClass("mobileFooter").removeClass("centerFooter");
	}
});
