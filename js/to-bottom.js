$(".toAbout").click(function() {
	$('html,body').animate({
		scrollTop: $(".wrap-about").offset().top + -100 + 'px'},
		'slow');
});