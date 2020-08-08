
$(document).ready(function(){
	$("ul").hide();
	$("ul li:odd").css("background-color", "#ffffff");
	$("h1 span").click(function(){
		$(this).parent().next().slideToggle();
	});
});
