(function () {
	var windowHeight = $(window).height();
	var introHeight = $('#intro').height(windowHeight - 60);
	$('#intro-content').height(introHeight.height());
})();