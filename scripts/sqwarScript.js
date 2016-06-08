$(document).ready(function() {
	if (typeof window.orientation !== "undefined") {
		$('#forMobile').addClass("mobileContainer").removeClass("mainContainer");
		$('.contentFooter').addClass("mobileFooter").removeClass("contentFooter");
	}
});
