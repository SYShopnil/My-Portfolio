$(document).ready(function () {
	$(window).scroll(function () {
		//if you hard code, then use console
		//.log to determine when you want the
		//nav bar to stick.
		console.log($(window).scrollTop());
		if ($(window).scrollTop() > 200) {
			$("#stikcyPart").addClass("navbar-fixed");
		}
		if ($(window).scrollTop() < 50) {
			$("#stikcyPart").removeClass("navbar-fixed");
		}
	});
});
