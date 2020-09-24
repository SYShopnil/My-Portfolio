$(document).ready(function () {
	var topArrow = document.getElementById("topArrowPicker");
	window.addEventListener("scroll", function () {
		if (window.pageYOffset > 100) {
			topArrow.classList.add("activePart");
		} else {
			topArrow.classList.remove("activePart");
		}
	});
});
