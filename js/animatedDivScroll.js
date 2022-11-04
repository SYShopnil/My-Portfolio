$(document).ready(function () {
	/**********************ABOUT US PART START************* */

	/*About US part Image part**/
	$(".aboutImgPicker").waypoint(
		function (direction) {
			$(".aboutImgPicker").addClass(
				"animate__animated animate__pulse animate__delay-0.3s"
			);
		},
		{
			offset: "35%",
		}
	);

	/*About US part Slider**/
	$(".slider_picker").waypoint(
		function (direction) {
			$(".slider_picker").addClass(
				"animate__animated animate__pulse animate__delay-0.5s"
			);
		},
		{
			offset: "35%",
		}
	);

	/********************* My Service part start******************/

	/**My serive header part*/
	$(".MyServiceHeader").waypoint(
		function (direction) {
			$(".MyServiceHeader").addClass(
				"animate__animated animate__slideInDown animate__delay-0.1s"
			);
		},
		{
			offset: "80%",
		}
	);

	/**Web Design part*/
	$(".webDesignPicker").waypoint(
		function (direction) {
			$(".webDesignPicker").addClass(
				"animate__animated animate__fadeInLeft animate__delay-0.5s"
			);
		},
		{
			offset: "80%",
		}
	);

	/**Web Development  part*/
	$(".web_development_picker").waypoint(
		function (direction) {
			$(".web_development_picker").addClass(
				"animate__animated animate__fadeInRight animate__delay-0.8s"
			);
		},
		{
			offset: "50%",
		}
	);

	/**Video editing  part*/
	$(".videoEditPick").waypoint(
		function (direction) {
			$(".videoEditPick").addClass(
				"animate__animated animate__fadeInUp animate__delay-0.25s"
			);
		},
		{
			offset: "75%",
		}
	);

	/**cinematography  part*/
	$(".cinematographyPicker").waypoint(
		function (direction) {
			$(".cinematographyPicker").addClass(
				"animate__animated animate__fadeInUp animate__delay-0.50s"
			);
		},
		{
			offset: "45%",
		}
	);

	/**Photography part*/
	$(".photographyPicker").waypoint(
		function (direction) {
			$(".photographyPicker").addClass(
				"animate__animated animate__backInUp animate__delay-1.2s"
			);
		},
		{
			offset: "75%",
		}
	);

	/*******************My skill Part start******************/
	/**Photography part*/
	$(".skill_Header").waypoint(
		function (direction) {
			$(".skill_Header").addClass(
				"animate__animated animate__slideInDown animate__delay-0.1s"
			);
		},
		{
			offset: "80%",
		}
	);

	/********************?Education par start***********/

	/***Education header****/
	$(".eduHeadPick").waypoint(
		function (direction) {
			$(".eduHeadPick").addClass(
				"animate__animated animate__slideInDown animate__delay-0.1s"
			);
		},
		{
			offset: "80%",
		}
	);

	/*** School part****/
	$(".schollPicker").waypoint(
		function (direction) {
			$(".schollPicker").addClass(
				"animate__animated animate__fadeInLeft animate__delay-0.5s"
			);
		},
		{
			offset: "80%",
		}
	);

	/*** College part****/
	$(".collegePicker").waypoint(
		function (direction) {
			$(".collegePicker").addClass(
				"animate__animated animate__fadeInUp animate__delay-0.8s"
			);
		},
		{
			offset: "80%",
		}
	);

	/*** University part****/
	$(".varsityPicker").waypoint(
		function (direction) {
			$(".varsityPicker").addClass(
				"animate__animated animate__fadeInRight animate__delay-0.5s"
			);
		},
		{
			offset: "80%",
		}
	);

	/******************* Project Part*****************/

	/*******header****** */
	$(".projectHeaderPicker").waypoint(
		function (direction) {
			$(".projectHeaderPicker").addClass(
				"animate__animated animate__slideInDown animate__delay-0.1s"
			);
		},
		{
			offset: "80%",
		}
	);

	/*******proeject 1****** */
	$(".project1Picker").waypoint(
		function (direction) {
			$(".project1Picker").addClass(
				"animate__animated animate__rotateInDownLeft animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*******proeject 2****** */
	$(".project2Picker").waypoint(
		function (direction) {
			$(".project2Picker").addClass(
				"animate__animated animate__rotateInDownRight animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*******proeject 3****** */
	$(".project3Picker").waypoint(
		function (direction) {
			$(".project3Picker").addClass(
				"animate__animated animate__slideInUp animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*******proeject 4****** */
	$(".project4Picker").waypoint(
		function (direction) {
			$(".project4Picker").addClass(
				"animate__animated animate__slideInUp animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*******proeject 5****** */
	$(".project5Picker").waypoint(
		function (direction) {
			$(".project5Picker").addClass(
				"animate__animated animate__slideInLeft animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/***********Travel Blog part****************/

	/*******header****** */
	$(".travelHeaderPicker").waypoint(
		function (direction) {
			$(".travelHeaderPicker").addClass(
				"animate__animated animate__slideInDown animate__delay-0.1s"
			);
		},
		{
			offset: "80%",
		}
	);

	/*************Chittagong Tour 2018******** */
	$(".ctg2018Picker").waypoint(
		function (direction) {
			$(".ctg2018Picker").addClass(
				"animate__animated animate__slideInLeft animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*************Cox's Bazar Tour 2018******** */
	$(".cox2018Picker").waypoint(
		function (direction) {
			$(".cox2018Picker").addClass(
				"animate__animated animate__slideInUp animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*************St. Martin's Island 2018******** */
	$(".stmartin2018Picker").waypoint(
		function (direction) {
			$(".stmartin2018Picker").addClass(
				"animate__animated animate__slideInRight animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*************Sylhet Tour 2018******** */
	$(".syl2018Picker").waypoint(
		function (direction) {
			$(".syl2018Picker").addClass(
				"animate__animated animate__slideInLeft animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*************Cox's Bazar Tour 2019******** */
	$(".cox2019Picker").waypoint(
		function (direction) {
			$(".cox2019Picker").addClass(
				"animate__animated animate__slideInUp animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*************Chittagong Tour 2019******** */
	$(".ctg2019Picker").waypoint(
		function (direction) {
			$(".ctg2019Picker").addClass(
				"animate__animated animate__slideInRight animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*************Khulna Tour 2019******** */
	$(".khul2019Picker").waypoint(
		function (direction) {
			$(".khul2019Picker").addClass(
				"animate__animated animate__slideInLeft animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*************St.MArtin Tour 2020******** */
	$(".stMartin2019PIcker").waypoint(
		function (direction) {
			$(".stMartin2019PIcker").addClass(
				"animate__animated animate__slideInUp animate__delay-0.5s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*******************Contact me part start************ */

	/**Header patt***/
	$(".contactHeaderPicker").waypoint(
		function (direction) {
			$(".contactHeaderPicker").addClass(
				"animate__animated animate__slideInDown animate__delay-0.1s"
			);
		},
		{
			offset: "80%",
		}
	);

	/*****Full Contact part***** */
	$(".contactPicker").waypoint(
		function (direction) {
			$(".contactPicker").addClass(
				"animate__animated animate__slideInUp animate__delay-0.1s"
			);
		},
		{
			offset: "50%",
		}
	);

	/*****************Footer part*******************/

	/*****Social Share part*****/
	$(".socialPicker").waypoint(
		function (direction) {
			$(".socialPicker").addClass(
				"animate__animated animate__flipInX animate__delay-0.8s"
			);
		},
		{
			offset: "80%",
		}
	);
});
