$(function() {
	$("#blockDropdown").change(function() {
	/*	if ( this.value == "01") {
			$("#admin").show();
		}
		else {
			$("#admin").hide();
		}
	*/
		$(".block").hide();
		$("#" + $(this).val()).show();
	});
});
