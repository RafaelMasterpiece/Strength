$(document).ready(function() {
	$("#login").validate({
			rules: {
				email:"required",
				password:"required"
			}
	});
})